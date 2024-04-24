BUG #1: AuthUser() Needs to verify the token in order to authenticate the user, was written with jwt.decode.

BUG #2: User.authenicate() missing await.

BUG #3: Delete route doesn't have an await.

BUG #4: Removed requireAdmin middleware from user patch route. Will not allow user to patch if they're not the admin, even though it should allow user to do so. Also included fields that we are authorized to update.

BUG #5: When registering a new User. Function is missing an admin column.
