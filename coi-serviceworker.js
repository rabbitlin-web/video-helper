/*! coi-serviceworker v0.1.7 - Mozilla Public License 2.0 */
let coepCredentialless = false;
if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
    self.addEventListener("message", (ev) => {
        if (!ev.data) {
            return;
        } else if (ev.data.type === "deregister") {
            self.registration.unregister().then(() => {
                return self.clients.matchAll();
            }).then(clients => {
                clients.forEach(client => client.navigate(client.url));
            });
        }
    });
    self.addEventListener("fetch", function (event) {
        const { request } = event;
        if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
            return;
        }
        if (request.mode === "no-cors") { // We need to set `coep` to `credentialless` here because the browser won't set it for us.
            coepCredentialless = true;
        }
        event.respondWith(
            fetch(request).then((response) => {
                if (response.status === 0) {
                    return response;
                }
                const newHeaders = new Headers(response.headers);
                newHeaders.set("Cross-Origin-Embedder-Policy", coepCredentialless ? "credentialless" : "require-corp");
                if (!coepCredentialless) {
                    newHeaders.set("Cross-Origin-Resource-Policy", "cross-origin");
                }
                newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
                return new Response(response.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders,
                });
            }).catch((e) => console.error(e))
        );
    });
} else {
    (() => {
        const re = new RegExp("coi-serviceworker.js");
        if (re.test(navigator.serviceWorker.controller?.scriptURL)) {
            console.log("COI Service Worker active");
        } else {
            console.log("Registering COI Service Worker");
            navigator.serviceWorker.register("coi-serviceworker.js").then(
                (registration) => {
                    console.log("COI Registered");
                    window.location.reload();
                },
                (err) => {
                    console.error("COI Registration Failed: ", err);
                }
            );
        }
    })();
}