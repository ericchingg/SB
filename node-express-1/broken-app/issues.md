# Broken App Issues

App needs express.json in order to parse request bodies or else req.body would return nothing.
Added async to post route callback, in order to use Promise.all. Which will handle all asynchronous calls that are made and have been resolved.
Res.send automatically stringifies an object, no need for JSON.stringify.
Error needs to be catched in the catch block. Added Catch (err).
