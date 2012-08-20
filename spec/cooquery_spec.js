describe("window.cookie", function(){
    afterEach(function(){
        window.document.cookie = undefined;
    });

    describe("set", function(){
        it("set a new cookie with a value", function(){
            window.cookie.set("my_cookie", "foobarbaz");
            expect( window.document.cookie ).toEqual("my_cookie=foobarbaz;");
        });

        it("set a new cookie with a value and a domain", function(){
            window.cookie.set("my_cookie", "foobarbaz", {
                domain : "google.com"
            });
            expect( window.document.cookie ).toEqual("my_cookie=foobarbaz; domain=google.com;");
        });

        it("set a new cookie with a path", function(){
            window.cookie.set("my_new_cookie", "foobarbazbar", {
                path : "/foo/bar/baz" 
            });
            expect( window.document.cookie ).toEqual("my_new_cookie=foobarbazbar; path=\/foo\/bar\/baz;");
        });

        it("set a new cookie with a duration (in days)", function(){
            spyOn( Date.prototype, "getTime").andCallFake(function(){
                return 1199999999999; // Thu, 10 Jan 2008 21:19:59 GMT ...
            });

            window.cookie.set("my_awesome_cookie", "somevalue", {
                duration : 2 // ... plus 2 days
            });

            expect( window.document.cookie ).toEqual(
                "my_awesome_cookie=somevalue; expires=Sat, 12 Jan 2008 21:19:59 GMT;" // ... :)
            );
        });

        it("set a secure cookie", function(){
            window.cookie.set("my_cookie", "value", {
                secure : true
            });

            expect( window.document.cookie ).toEqual("my_cookie=value; secure;");
        });

        it("encode the cookie value", function(){
            window.cookie.set("my_other_cookie", "value with spaces e áéáóíú");

            expect( window.document.cookie ).toEqual("my_other_cookie=value%20with%20spaces%20e%20%C3%A1%C3%A9%C3%A1%C3%B3%C3%AD%C3%BA;");
        });
    });

    describe("get", function(){
        it("return undefined if cookie is not found", function(){
            window.document.cookie = "";
            expect( window.cookie.get("cookie_name") ).toBe(undefined);
        });

        it("return the cookie value", function(){
            window.document.cookie = "my_other_cookie=value%20with%20spaces%20e%20%C3%A1%C3%A9%C3%A1%C3%B3%C3%AD%C3%BA; foo=bar;";

            expect( window.cookie.get("my_other_cookie") ).toEqual("value with spaces e áéáóíú");
            expect( window.cookie.get("foo") ).toEqual("bar");
        });

        it("return a cookie value with badly encoded spaces", function(){
            window.document.cookie = "my_other_cookie=value+with+spaces+e+%C3%A1%C3%A9%C3%A1%C3%B3%C3%AD%C3%BA; foo=bar;";

            expect( window.cookie.get("my_other_cookie") ).toEqual("value with spaces e áéáóíú");
            expect( window.cookie.get("foo") ).toEqual("bar");
        });
    });

    describe("del", function(){
        it("calls set() with negative duration that will make cookie expire", function(){
            spyOn(window.cookie, "set").andCallThrough();

            spyOn( Date.prototype, "getTime").andCallFake(function(){
                return 1327723123330; // Sat, 28 Jan 2012 03:58:43 GMT ...
            });

            window.cookie.del("my_cookie");

            expect( window.cookie.set ).toHaveBeenCalledWith("my_cookie", "", {
                duration : -1 // ... minus 1 day ...
            });

            expect( window.document.cookie ).toEqual(
                "my_cookie=; expires=Fri, 27 Jan 2012 03:58:43 GMT;" // ... :)
            );
        });
    });
});
