function setUserAgent(window, userAgent) {
    // Works on Firefox, Chrome, Opera and IE9+
    console.log('Starting...');
    if (navigator.__defineGetter__) {
        navigator.__defineGetter__('userAgent', function () {
        console.log('Done: 1');
            return userAgent;
        });
    } else if (Object.defineProperty) {
        Object.defineProperty(navigator, 'userAgent', {
            get: function () {
                console.log('Done: 2');
                return userAgent;
            }
        });
    }
    // Works on Safari
    if (window.navigator.userAgent !== userAgent) {
        var userAgentProp = {
            get: function () {
                console.log('Done: 3');
                return userAgent;
            }
        };
        try {
            Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
        } catch (e) {
            window.navigator = Object.create(navigator, {
                userAgent: userAgentProp
            });
            console.log('Done: 4');
        }
    }
}
