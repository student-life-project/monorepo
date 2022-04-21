mongosh -- "$MONGO_INITDB_DATABASE" <<EOF
    var dbName = '$MONGO_INITDB_DATABASE';
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var user = '$MONGO_INITDB_USERNAME';
    var passwd = '$(cat "$MONGO_INITDB_PASSWORD_FILE")';
    var dbAdmin = db.getSiblingDB('admin');
    dbAdmin.createUser({user: user, pwd: passwd, roles: ['readWrite'], mechanisms: ['SCRAM-SHA-1']});
    dbAdmin.auth({user: user, pwd: passwd, mechanisms: ['SCRAM-SHA-1'], digestPassword: true});
    db = db.getSiblingDB(dbName);
    db.createCollection('rental-place', { capped: false });
    db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
    db.createUser({user: user, pwd: passwd, roles: [{role: 'root', db: dbName}, 'readWrite'], mechanisms: ['SCRAM-SHA-1']});
    db.active.countDocuments()
    db.active.findOne()
EOF
