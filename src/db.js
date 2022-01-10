import Dexie from 'dexie';
import Datastore from 'nedb';
import {writable} from 'svelte/store';

var dbs = new Datastore({filename: 'AppData.db',autoload: true });

// db = {};
// db.users = new Datastore('path/to/users.db');
// db.robots = new Datastore('path/to/robots.db');
 
// // You need to load each database (here we do it asynchronously)
// db.users.loadDatabase();
// db.robots.loadDatabase();

let product = writable(dbs);

//  const db = new Dexie('myDatabase');
//  db.version(1).stores({ friends: '++id, name, age', });
//  var jaggu = db.friends

  export { product };