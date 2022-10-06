/*
                     _oo0oo_
                    o8888888o
                    88" . "88
                    (| -_- |)
                    0\  =  /0
                  ___/`---'\___
                .' \\|     |// '.
               / \\|||  :  |||// \
              / _||||| -:- |||||- \
             |   | \\\  -  /// |   |
             | \_|  ''\---/''  |_/ |
             \  .-\__  '-'  ___/-. /
           ___'. .'  /--.--\  `. .'___
        ."" '<  `.___\_<|>_/___.' >' "".
       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
       \  \ `_.   \_ __\ /__ _/   .-` /  /
   =====`-.____`.___ \_____/___.-`___.-'=====
                     `=---='
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
console.clear(); // eslint-disable-line no-console

const server = require('./src/server');
const { conn } = require('./src/db');

const connection = async () => {
	const reload = await conn.sync({ force: true });

	return reload;
};

connection(server.listen(3001, () => console.log(`http://localhost:3001/`))); // eslint-disable-line no-console
DB_USER=postgres

DB_PASSWORD=1034

DB_HOST=localhost

API_KEY_REST=880cf0e63ea24415abdbfa6aab1b7b8a

API_KEY_0=d28a45d38e354c1dbe8490ee25b0f875

API_KEY_1=82391ac3952a4287978a048301fc1fb6

API_KEY_2=bbb4b96713e54cff8ac0b727485510b3

API_KEY_3=000bb79cb9974e12a35cde5da18318e5

API_KEY_4=237182fee3534b17a9dbd50658ef9825

API_KEY_5=f7686d9cd3ee41778ef68e2a103cef06

API_KEY_6=29856573cd9549e696ae56e64f4569fc
