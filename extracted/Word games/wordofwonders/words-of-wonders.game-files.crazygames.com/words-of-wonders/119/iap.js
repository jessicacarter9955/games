const FAMOBI_IAP_EVENTS = {
  PURCHASE_SUCCESS_EVENT: "PURCHASE_SUCCESS_EVENT",
  PURCHASE_FAIL_EVENT: "PURCHASE_FAIL_EVENT",
};

(function () {
  let paymentPackages = null;
  let callback = null;
  let gameId = window.famobi_gameID;
  let loggedIn = false;
  let uid = null;

  function onEvent(cb) {
    callback = cb;
  }

  function dispatch(event, payload) {
    try {
      if (callback != null && typeof callback != "undefined") {
        callback(new CustomEvent(event, { detail: payload }));
      }
    } catch (e) {
      console.error(e);
    }
  }

  function trackPayment(_data) {
    // Custom headers
    const headers = {
      "X-Game": gameId,
      "X-User": uid,
      "Content-Type": "application/json",
    };

    var _paymentPackage = paymentPackages[_data.productID] || {};
    console.log("Payment package: " + JSON.stringify(_paymentPackage));
    // Datenobjekt für den POST-Request
    const postData = {
      packageId: _data.productID,
      orderId: _data.purchaseToken,
      date: Date.now(),
      transactionId: _data.purchaseToken,
      provider: "yandex",
      method: "yandex",
      country:
        window.ysdk.environment.i18n.tld != null
          ? window.ysdk.environment.i18n.tld.toUpperCase()
          : null,
      currency: "YAN",
      amount: _paymentPackage.priceValue,
      tax: 0.0,
      vat: 0.0,
      providerFee: 0.0,
      methodFee: 0.0,
      payout: 0.0,
      commission: 0.0,
      bonus: 0.0,
      aid: "A-YANDEX",
      currencyRate: 0.016,
    };

    // Fetch ohne Rückgabe oder Fehlerprüfung
    fetch("https://master.tracking.html5games.com/event/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(postData),
    }).catch((error) => console.error("Fehler beim Payment Tracking:", error));
  }

  function setupCrazyGames() {
    const xsollaConfig = {
      "words-of-wonders": {
        projectId: 250635,
      },
      "zoo-boom": {
        projectId: 143540,
      },
    };
    let projectId = null;
    let sandbox = false;
    // get token from our firebase backend
    function getBearerToken(sku) {
      return window.CrazyGames.SDK.user.getXsollaUserToken();

      return new Promise((resolve, reject) => {
        // get token from our firebase backend
        fetch(
          `https://us-central1-famobi-01.cloudfunctions.net/xsollaTokenCrazyGames`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              packageId: sku,
              sb: sandbox,
              token: uid,
              gameId: gameId,
              projectId: projectId,
              aid: "A-CRAZYGAMES",
            }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              reject(Error("Network response was not ok"));
            } else {
              return response.json();
            }
          })
          .then((data) => {
            resolve(data.token);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
            reject(error);
          });
      });
    }

    // get token from xsolla backend
    function getXsollaToken(sku) {
      return new Promise((resolve, reject) => {
        getBearerToken(sku).then((bearerToken) => {
          var mobile = isMobileBrowser();
          fetch(
            `https://store.xsolla.com/api/v2/project/${projectId}/payment/item/${sku}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + bearerToken,
              },
              body: JSON.stringify({
                sandbox: sandbox,
                settings: {
                  ui: {
                    size: mobile ? "small" : "large",
                    theme: "default",
                    version: mobile ? "mobile" : "desktop",
                    desktop: {
                      header: {
                        is_visible: true,
                        visible_logo: true,
                        visible_name: true,
                        visible_purchase: true,
                        type: "normal",
                        close_button: false,
                      },
                    },
                    mobile: {
                      footer: { is_visible: true },
                      header: { close_button: false },
                    },
                  },
                },
              }),
            }
          )
            .then((response) => {
              if (!response.ok) {
                reject(Error("Network response was not ok"));
              } else {
                return response.json();
              }
            })
            .then((data) => {
              console.log("Xsolla token:", data.token);
              resolve(data.token);
            })
            .catch((error) => {
              console.error("Fetch error:", error);
              reject(error);
            });
        });
      });
    }

    function isMobileBrowser() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }

    function openXsollaShop(xsollaToken) {
      if (isMobileBrowser()) {
        console.log("Opening Xsolla iframe");
        return openIFrame(xsollaToken);
      }
      console.log("Opening Xsolla widget");
      return openWidget(xsollaToken);
    }

    function openIFrame(xsollaToken) {
      return new Promise((resolve, reject) => {
        var prefix = sandbox ? "sandbox-secure" : "secure";
        var url = `https://${prefix}.xsolla.com/paystation4/?token=${xsollaToken}`;
        console.log("Xsolla iframe URL:", url);

        var iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.allow = "clipboard-read; clipboard-write; payment";
        iframe.style.position = "fixed";
        iframe.style.top = "30px";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.background = "transparent";
        iframe.style.zIndex = "1000";
        iframe.onload = function () {
          console.log("Xsolla iframe loaded");
        };
        iframe.onerror = function () {
          console.error("Error loading Xsolla iframe");
          reject("Error loading iframe");
        };
        document.body.appendChild(iframe);

        var closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.style.position = "absolute";
        closeButton.style.top = "0px";
        closeButton.style.right = "15px";
        closeButton.style.zIndex = "10001";
        closeButton.style.color = "#fff";
        closeButton.style.border = "none";
        closeButton.style.padding = "5px";
        closeButton.style.fontSize = "12px";
        closeButton.style.cursor = "pointer";
        closeButton.style.boxShadow = "2px 4px 6px rgba(0, 0, 0, 0.1)";
        closeButton.style.background = "transparent";
        closeButton.onclick = function () {
          document.body.removeChild(iframe);
          document.body.removeChild(closeButton);
          reject("Payment canceled by user");
        };
        document.body.appendChild(closeButton);

        window.addEventListener("message", function onMessage(event) {
          if (event.origin.includes("xsolla")) {
            console.log("Message received from Xsolla:", event.data);
            switch (event.data.command) {
              case "open-status-success":
                resolve(true);
                document.body.removeChild(iframe);
                document.body.removeChild(closeButton);
                window.removeEventListener("message", onMessage);
                break;
              case "close":
                reject("Payment canceled");
                document.body.removeChild(iframe);
                document.body.removeChild(closeButton);
                window.removeEventListener("message", onMessage);
                break;
              default:
                console.warn("Unknown message from Xsolla:", event.data);
                break;
            }
          }
        });
      });
    }

    function openWidget(xsollaToken) {
      return new Promise((resolve, reject) => {
        var _options = {
          sandbox: sandbox,
          access_token: xsollaToken,
        };

        var _script = document.createElement("script");
        _script.type = "text/javascript";
        _script.async = true;
        if (sandbox) {
          _script.src = "//cdn.xsolla.net/embed/paystation/1.2.9/widget.min.js";
        } else {
          _script.src =
            "https://cdn.xsolla.net/payments-bucket-prod/embed/1.5.0/widget.min.js";
        }
        _script.addEventListener(
          "load",
          function (e) {
            XPayStationWidget.init(_options);

            var statusEvents = [
              XPayStationWidget.eventTypes.STATUS,
              XPayStationWidget.eventTypes.LOAD,
              XPayStationWidget.eventTypes.OPEN,
              XPayStationWidget.eventTypes.CLOSE,
              XPayStationWidget.eventTypes.STATUS_INVOICE,
              XPayStationWidget.eventTypes.STATUS_DELIVERING,
              XPayStationWidget.eventTypes.STATUS_DONE,
              XPayStationWidget.eventTypes.STATUS_TROUBLED,
            ].join(" ");
            XPayStationWidget.on(statusEvents, function (e) {
              console.log("Status event: " + e.type);
              switch (e.type) {
                case XPayStationWidget.eventTypes.CLOSE:
                  reject(e.type);
                  if (_script.parentNode) {
                    _script.parentNode.removeChild(_script);
                  }
                  break;
                case XPayStationWidget.eventTypes.STATUS_DONE:
                  resolve(true);
                  if (_script.parentNode) {
                    _script.parentNode.removeChild(_script);
                  }
                  break;
              }
            });

            XPayStationWidget.open();
          },
          false
        );

        document.head.appendChild(_script);
      });
    }

    function createCrazyGamesOnlineStorage() {
      console.log("Creating CrazyGames online storage");
      let oldStorage = window.localStorage;
      let onlineStorage = window.CrazyGames.SDK.data;
      if (typeof onlineStorage != "undefined") {
        const storageKey = window.famobi_gameID + ":data";
        let localCache = {};
        let saveTimer = null;

        console.log(
          `Online storage available, getting data for key ${storageKey}...`
        );
        let data = onlineStorage.getItem(storageKey);
        console.log("Online storage data:", data);
        if (data == null) {
          // no online data available, user local storage and only game data
          localCache = { ...oldStorage };
          for (let key in localCache) {
            if (!key.startsWith(window.famobi_gameID + ":")) {
              delete localCache[key];
            }
          }
          onlineStorage.setItem(storageKey, JSON.stringify(localCache));
        } else {
          localCache = JSON.parse(data);
        }

        function saveData() {
          if (saveTimer) {
            console.log("Save already in progress");
            return;
          }

          saveTimer = setTimeout(() => {
            console.log("Saving data...");
            try {
              onlineStorage.setItem(storageKey, JSON.stringify(localCache));
            } catch (e) {
              console.error("Error saving data:", e);
            }
            saveTimer = null;
          }, 5000);
        }

        // LocalStorage-ähnliches Interface
        let crazyGamesStorage = {
          // Entspricht localStorage.setItem(key, value)
          setItem: function (key, value) {
            key = window.famobi_gameID + ":" + key;
            console.log(`Setting item ${key} to ${value}`);
            localCache[key] = value;
            saveData();
          },

          getItem: function (key) {
            key = window.famobi_gameID + ":" + key;
            console.log(
              `Getting item ${key} from cached storage: ${localCache[key]}`
            );
            return localCache[key];
          },

          removeItem: function (key) {
            key = window.famobi_gameID + ":" + key;
            console.log(`Removing item ${key}`);
            if (key in localCache) {
              delete localCache[key];
              saveData();
              return true;
            }
            return false;
          },

          clear: function () {
            onlineStorage.clear();
          },
        };

        return crazyGamesStorage;
      } else {
        console.log("Online storage not available");
        return oldStorage;
      }
    }

    window.famobi.iap.init = function () {
      projectId = xsollaConfig[gameId]?.projectId;

      console.log(`Initializing Xsolla IAP with project id "${projectId}"`);

      window.CrazyGames.SDK.user.addAuthListener((user) => {
        console.log("User authenticated:", user);
        loggedIn = user != null;
      });

      window.famobi.localStorage = window.localStorage =
        createCrazyGamesOnlineStorage();

      return Promise.resolve();
    };

    window.famobi.iap.getProducts = function () {
      console.log("Fetching products for Xsolla");
      return new Promise((resolve, reject) => {
        window.CrazyGames.SDK.user.getUser().then((user) => {
          if (user != null) {
            fetch(
              `https://store.xsolla.com/api/v2/project/${projectId}/items/virtual_currency/package`
            )
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => {
                resolve(
                  data.items.map((product) => ({
                    sku: product.sku,
                    title: product.name,
                    description: product.description,
                    imageURI: product.image_url,
                    displayPrice:
                      product.price.amount + " " + product.price.currency,
                    priceValue: parseFloat(product.price.amount),
                    priceCurrencyCode: product.price.currency,
                  }))
                );
              })
              .catch((error) => {
                console.error("Fetch error:", error);
                resolve([]);
              });
          } else {
            resolve([]);
          }
        });
      });
    };

    window.famobi.iap.buyProduct = function (sku) {
      console.log(`Buying product ${sku} on Xsolla`);
      return new Promise((resolve, reject) => {
        //window.CrazyGames.SDK.user.getXsollaUserToken().then((xsollaToken)=> {
        getXsollaToken(sku)
          .then((xsollaToken) => {
            openXsollaShop(xsollaToken).then(
              (result) => {
                console.log(`Buying product ${sku} result: ${result}`);
                dispatch(FAMOBI_IAP_EVENTS.PURCHASE_SUCCESS_EVENT, {
                  sku: sku,
                });
                resolve({ sku: sku });
              },
              (error) => {
                console.log(`Buying product ${sku} error: ${error}`);
                resolve(false);
              }
            );
          })
          .catch((error) => {
            console.error("Token Fetch error:", error);
            reject(error);
          });
      }).catch((error) => {
        console.error("Bearer Fetch error:", error);
        reject(error);
      });
    };

    window.famobi.iap.consumeProduct = function (sku) {
      return new Promise((resolve, reject) => {
        resolve(true);
      });
    };
  }

  // ***** we are in yandex mode *****************
  function setupYandex() {
    let yandexPayments = null;
    let yandexPurchases = [];

    function initPlayer(force = false) {
      if (window.yandexPlayer != null && !force) {
        return Promise.resolve(window.yandexPlayer);
      } else {
        return ysdk.getPlayer({ scopes: false }).then((player) => {
          console.log(
            "Yandex player initialized: " + JSON.stringify(player.getMode())
          );
          window.yandexPlayer = player;
          uid = player.getUniqueId();
          return window.yandexPlayer;
        });
      }
    }

    window.famobi.iap.auth = function () {
      return new Promise((resolve, reject) => {
        initPlayer().then((_player) => {
          console.log(
            "Yandex player initialized: " + JSON.stringify(_player.getMode())
          );
          if (_player.getMode() === "lite") {
            // The player isn't logged in.
            console.log("openAuthDialog");
            try {
              ysdk.auth.openAuthDialog().then(() => {
                initPlayer(true)
                  .then((_player) => resolve(_player))
                  .catch((err) => {
                    console.error("Error initializing the Player object:", err);
                    // Error initializing the Player object.
                    reject(err);
                  });
              });
            } catch (error) {
              console.error("Yandex auth open error:", error);
              reject(error);
            }
          } else {
            // The player is already logged in
            console.log("Player already logged in");
            resolve(_player);
          }
        });
      });
    };

    window.famobi.iap.init = function () {
      console.log("Initializing Yandex IAP");
      return new Promise((resolve, reject) => {
        window.famobi.iap
          .auth()
          .then(() => {
            createYandexOnlineStorage().then((storage) => {
              window.famobi.localStorage = window.localStorage = storage;
              window.ysdk
                .getPayments(/*{ signed: true }*/)
                .then((yp) => {
                  //console.log("Got Yandex payment api");
                  yandexPayments = yp;
                  resolve();
                })
                .catch((error) => {
                  console.error("Yandex payment init error:", error);
                  reject(error);
                });
            });
          })
          .catch((error) => {
            console.error("Yandex auth error:", error);
            reject(error);
          });
      });
    };

    function createYandexOnlineStorage() {
      // Lokaler Speicher als einfaches Objekt
      let localData = {};
      let oldStorage = window.localStorage;

      // SDK initialisieren und Player-Objekt holen
      return initPlayer().then((player) => {
        // Initial die Daten aus der Cloud laden
        if (player.getMode() === "lite") {
          return oldStorage;
        }

        return player.getData().then((cloudData) => {
          // !!! Temp delete cloud stuff
          //cloudData = {};  player.setData(cloudData);

          console.log("Initial cloud storage loaded:", cloudData);
          console.log("Initial local storage loaded:", oldStorage);

          if (
            typeof cloudData != "undefined" &&
            Object.keys(cloudData).length !== 0
          ) {
            localData = { ...cloudData };
            console.log("use cloud storage:", localData);
          } else {
            localData = { ...oldStorage };
            console.log("use local storage:", localData);
          }

          // LocalStorage-ähnliches Interface
          const yandexStorage = {
            // Entspricht localStorage.setItem(key, value)
            setItem: function (key, value) {
              key = window.famobi_gameID + ":" + key;
              console.log(`Setting item ${key} to ${value}`);

              // Lokal aktualisieren
              if (localData[key] != value) {
                localData[key] = value;
                console.log(`Local data updated:`, localData);

                // Kompletten lokalen Speicher in die Cloud hochladen
                player
                  .setData(localData)
                  .then(() => {
                    console.log(`Cloud updated with ${key}: ${value}`);
                  })
                  .catch((err) => {
                    console.error("Error uploading to cloud:", err);
                  });
              }
            },

            getItem: function (key) {
              key = window.famobi_gameID + ":" + key;
              const value = localData[key] || null;
              console.log(`Getting item ${key} from local storage: ${value}`);
              return value;
            },

            removeItem: function (key) {
              key = window.famobi_gameID + ":" + key;
              console.log(`Removing item ${key}`);
              if (key in localData) {
                delete localData[key];
                // Kompletten Speicher hochladen
                player
                  .setData(localData)
                  .then(() => {
                    console.log(`Cloud updated after removing ${key}`);
                  })
                  .catch((err) => {
                    console.error("Error uploading to cloud:", err);
                  });
                return true;
              }
              return false;
            },

            clear: function () {
              console.log("Clearing local and cloud storage");
              localData = {};
              return player
                .setData({})
                .then(() => {
                  console.log("Cloud cleared");
                  return true;
                })
                .catch((err) => {
                  console.error("Error clearing cloud:", err);
                  return false;
                });
            },

            getLength: function () {
              const length = Object.keys(localData).length;
              console.log(`Local storage length: ${length}`);
              return length;
            },
          };

          return yandexStorage;
        });
      });
    }

    window.famobi.iap.getProducts = function () {
      return new Promise((resolve, reject) => {
        //console.log("Yandex getProducts");
        if (paymentPackages != null) {
          resolve(paymentPackages);
        } else {
          yandexPayments
            .getCatalog()
            .then((packages) => {
              paymentPackages = packages.map((product) => ({
                sku: product.id,
                title: product.title,
                description: product.description,
                imageURI: product.imageURI,
                displayPrice: parseFloat(product.price),
                priceValue: parseFloat(product.priceValue),
                priceCurrencyCode: product.priceCurrencyCode,
                currencyImageURI: product.getPriceCurrencyImage("medium"),
              }));
              //console.log( "Yandex products: " + JSON.stringify( paymentPackages ) );
              resolve(paymentPackages);
            })
            .catch((error) => {
              console.error("Yandex getCatalog error:", error);
              reject(error);
            });
        }
      });
    };

    window.famobi.iap.buyProduct = function (sku) {
      console.log(`Buying product ${sku} on Yandex`);
      return new Promise((resolve, reject) => {
        yandexPayments.purchase({ id: sku, developerPayload: "{}" }).then(
          (yandexPurchase) => {
            const result = { sku: sku, data: yandexPurchase };
            dispatch(FAMOBI_IAP_EVENTS.PURCHASE_SUCCESS_EVENT, result);

            console.log(
              `Buying product ${sku} success: ${JSON.stringify(yandexPurchase)}`
            );
            yandexPurchases.push(yandexPurchase);

            resolve(result);
          },
          (error) => {
            console.log("Yandex purchase error:", error);
            reject(error);
          }
        );
      });
    };

    window.famobi.iap.consumeProduct = function (sku) {
      console.log(`Consuming product ${sku}`);
      return new Promise((resolve, reject) => {
        var _purchase = yandexPurchases.find(
          (purchase) => purchase.productID == sku
        );
        if (_purchase != null) {
          yandexPayments.consumePurchase(_purchase.purchaseToken).then(
            (result) => {
              console.log(
                `Consuming product ${sku} success: ${JSON.stringify(result)}`
              );
              trackPayment(_purchase);
              yandexPurchases = yandexPurchases.filter(
                (purchase) => purchase.id != sku
              );
              resolve(result);
            },
            (error) => {
              console.error("Yandex consume error:", error);
              reject(error);
            }
          );
        } else {
          console.error(`Purchase ${sku} not found`);
          reject(Error(`Purchase ${sku} not found`));
        }
      });
    };
  }

  let yandexEnvironment = typeof window.YaGames != "undefined";
  console.log(
    `Initializing IAP for ${
      yandexEnvironment ? "Yandex" : "CrazyGames"
    } cause by ${yandexEnvironment}`
  );

  if (yandexEnvironment) {
    setupYandex();
  } else {
    setupCrazyGames();
  }
})();
