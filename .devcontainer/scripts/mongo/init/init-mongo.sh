mongosh -- "$MONGO_INITDB_DATABASE" <<EOF
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$(cat "$MONGO_INITDB_ROOT_PASSWORD_FILE")';
    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);

    var user = '$MONGO_INITDB_USERNAME';
    var passwd = '$(cat "$MONGO_INITDB_PASSWORD_FILE")';
    db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
    
    var dbName = '$MONGO_INITDB_DATABASE';
    db = db.getSiblingDB(dbName);
    db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
    db.createUser({user: user, pwd: passwd, roles: [{role: "root", db: dbName}]});
EOF