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
console.clear();
const server = require('./src/server');
const { conn } = require('./src/db');

const connection = async () => {
	const reload = await conn.sync({ force: true });
	return reload;
};

connection(server.listen(3001, () => console.log(`http://localhost:3001/`)));
