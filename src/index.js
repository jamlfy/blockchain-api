import * as request from 'request';
import { stringify } from 'querystring';

/**
 *
 * import BlockChain form 'blockChain-api';
 * var newWallet = {
 * 	password : 'MyPass',
 * 	api_code : API_KEY,
 * 	priv : null,
 * 	label : null,
 * 	email : null
 * };
 *
 * BlockChain.createWallet(newWallet, (err, data) => {
 * 	let wallet = new BlockChain(data.guid, newWallet.password);
 *
 * 	wallet.balance(callback);
 * 	wallet.list(callback);
 * 	wallet.addressBalance(address, confirmations, callback);
 * 	wallet.newAddress(label, callback);
 * 	wallet.archiveAddress(address, callback);
 * 	wallet.unarchiveAddress(address, callback);
 * 	wallet.autoConsolidate(days, callback);
 * 	wallet.payment(to, amount, obj, callback);
 * 	wallet.sendMany(recipients, obj, callback);
 * });
 *
 * BlockChain.chart(type, callback);
 * BlockChain.ticker(callback);
 * BlockChain.toBTC(value, currency, callback);
 * BlockChain.stats(callback);
 * BlockChain.getDifficulty(obj, callback);
 * BlockChain.getBlockCount(obj, callback);
 * BlockChain.latesthash(obj, callback);
 * BlockChain.bcperBlock(obj, callback);
 * BlockChain.totalBc(obj, callback);
 * BlockChain.probability(obj, callback);
 * BlockChain.hashestowin(obj, callback);
 * BlockChain.nextreTarget(obj, callback);
 * BlockChain.avgtxSize(obj, callback);
 * BlockChain.avgtxValue(obj, callback);
 * BlockChain.interval(obj, callback);
 * BlockChain.eta(obj, callback);
 * BlockChain.avgtxNumber(obj, callback);
 * BlockChain.getReceivedByAddress(address, callback);
 * BlockChain.getSentByAddress(address, callback);
 * BlockChain.addressBalance(address, callback);
 * BlockChain.addressFirstseen(address,obj, callback);
 * BlockChain.txTotalbtcOutput(hash, obj, callback);
 * BlockChain.txTotalbtcInput(hash, obj, callback);
 * BlockChain.txFee(hash, obj, callback);
 * BlockChain.txResult(hash, address, obj, callback);
 * BlockChain.hashtontxid(hash, obj, callback);
 * BlockChain.ntxidtohash(hash, obj, callback);
 * BlockChain.addressToHash(address,obj, callback);
 * BlockChain.hashToAddress(hash, obj, callback);
 * BlockChain.hashPubKey(hash, obj, callback);
 * BlockChain.addrPubKey(hash, obj, callback);
 * BlockChain.pubKeyAddr(hash, obj, callback);
 * BlockChain.newKey(obj, callback);
 * BlockChain.unconfirmedCount(obj, callback);
 * BlockChain.price24hr(obj, callback);
 * BlockChain.marketCap(obj, callback);
 * BlockChain.transactionCount24hr(obj, callback);
 * BlockChain.btcsent24hr(obj, callback);
 * BlockChain.hashRate(obj, callback);
 * BlockChain.rawblock(types, callback);
 * BlockChain.rawTx(types, callback);
 * BlockChain.blockHeight(types, callback);
 * BlockChain.latestblock( callback);
 * BlockChain.unconfirmedTransactions( callback);
 * BlockChain.blocks(types, callback);
 * BlockChain.inv(types, callback);
 * BlockChain.address(types, callback);
 * BlockChain.unspent(active, callback);
 */
export default class chain {
	static _format = 'json';
	static _domain = 'https://blockchain.info';
	static _lang = 'es';
	static _api = 'https://api.blockchain.info/v2/';
	static _q = 'q';

	/**
	 * [constructor description]
	 * @param  {String} guid            GUID for BlockCain
	 * @param  {String} password        Password BlockChain
	 * @param  {String} second_password Password Secund BlockCain
	 * @param  {String} Key             API KEY
	 * @param  {String} options.domain  Domain of BlockChain
	 * @return {Object}
	 */
	constructor(guid, pass, pas2, key, {
		domain = chain._domain,
		lang = chain._lang,
		api = chain._api,
		q = chain._q
	}) {
		this._url = domain + '/' + lang;
		this._api = api;
		this._key = key;
		this.config = { guid, pass, pas2 };

		return this;
	}

	/**
	 * [balance description]
	 * @param  {Function} callback
	 * @return {Function}
	 */
	balance (callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/balance`, {
			password : this.config.pass
		}, callback);
	}

	/**
	 * [list description]
	 * @param  {Function} callback
	 * @return {Function}
	 */
	list (callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/list`, {
			password : this.config.pass
		}, callback);
	}

	/**
	 * [addressBalance description]
	 * @param  {String}   address
	 * @param  {Number}   confirmations
	 * @param  {Function} callback
	 * @return {Function}
	 */
	addressBalance (address, confirmations=3, callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/address_balance`, {
			password : this.config.pass,
			address,
			confirmations
		}, callback);
	}

	/**
	 * [newAddress description]
	 * @param  {String}   label Label Name
	 * @param  {Function} callback
	 * @return {Function}
	 */
	newAddress (label, callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/new_address`, {
			password : this.config.pass,
			second_password : this.config.pas2,
			label
		}, callback);
	}

	/**
	 * [archiveAddress description]
	 * @param  {String}   address Address Bitcoin
	 * @param  {Function} callback
	 * @return {Function}
	 */
	archiveAddress (address, callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/archive_address`, {
			password : this.config.pass,
			second_password : this.config.pas2,
			address
		}, callback);
	}

	/**
	 * [unarchiveAddress description]
	 * @param  {String}   address Address Bitcoin
	 * @param  {Function} callback
	 * @return {Function}
	 */
	unarchiveAddress (address, callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/unarchive_address`, {
			password : this.config.pass,
			second_password : this.config.pas2,
			address
		}, callback);
	}

	/**
	 * [autoConsolidate description]
	 * @param  {Number}   days
	 * @param  {Function} callback
	 * @return {Function}
	 */
	autoConsolidate (days, callback) {
		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/auto_consolidate`, {
			password : this.config.pass,
			second_password : this.config.pas2,
			days
		}, callback);
	}

	/**
	 * [payment description]
	 * @param  {String}   to
	 * @param  {Number}   amount
	 * @param  {Object}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	payment (to, amount, obj, callback) {
		let params = {
			to, amount,
			password : this.config.pass,
			second_password : this.config.pas2
		};

		if(typeof obj == 'object'){
			for (let i in obj) {
				params[i] = obj[i];
			}
		}

		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/payment`, params, callback);
	}

	/**
	 * [sendMany description]
	 * @param  {Object}   recipients
	 * @param  {Object}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	sendMany (recipients, obj, callback) {
		let params = {
			recipients : JSON.stringify(recipients),
			password : this.config.pass,
			second_password : this.config.pas2,
		};

		if(typeof obj == 'object'){
			for (let i in obj) {
				params[i] = obj[i];
			}
		}

		return chain.__Sender(`${this._url}/merchant/${this.config.guid}/sendmany`, obj, callback);
	}

	/**
	 * [receivePayments description]
	 * @param  {String}   xpub
	 * @param  {Function} callback
	 * @param  {Function} callback
	 * @return {Function}
	 */
	receivePayments (xpub, callback, result) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/receive`, {
			key : this._key,
			xpub, callback
		}, result);
	}

	/**
	 * [callbackLogPayments description]
	 * @param  {Function} callback
	 * @param  {Function} callback
	 * @return {Function}
	 */
	callbackLogPayments (callback, result) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/receive/callback_log`, {
			key : this._key,
			callback
		}, result);
	}

	/**
	 * [createWallet description]
	 * @param  {Object}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static createWallet (obj={}, callback){
		return chain.__Sender(`${chain._api}/create_wallet`, obj, callback );
	}

	/**
	 * [chart description]
	 * @param  {String}   type
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static chart (type, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/charts/${type}`, {
			format : chain._format
		}, callback );
	}

	/**
	 * [ticker description]
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static ticker (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/ticker`, obj, callback );
	}

	/**
	 * [toBTC description]
	 * @param  {String}   currency
	 * @param  {Number}   value
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static toBTC (value=100, currency='USD', callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/tobtc`, {
			currency, value
		}, callback );
	}

	/**
	 * [stats description]
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static stats (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/stats`, obj, callback );
	}

	/**
	 * [getDifficulty description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static getDifficulty (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/getdifficulty`, obj, callback);
	}

	/**
	 * [getBlockCount description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static getBlockCount (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/getblockcount`, obj, callback);
	}

	/**
	 * [latesthash description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static latesthash (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/latesthash`, obj, callback);
	}

	/**
	 * [bcperBlock description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static bcperBlock (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/bcperblock`, obj, callback);
	}

	/**
	 * [totalBc description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static totalBc (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/totalbc`, obj, callback);
	}

	/**
	 * [probability description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static probability (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/probability`, obj, callback);
	}

	/**
	 * [hashestowin description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static hashestowin (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/hashestowin`, obj, callback);
	}

	/**
	 * [nextreTarget description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static nextreTarget (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/nextretarget`, obj, callback);
	}

	/**
	 * [avgtxSize description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static avgtxSize (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/avgtxsize`, obj, callback);
	}

	/**
	 * [avgtxValue description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static avgtxValue (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/avgtxvalue`, obj, callback);
	}

	/**
	 * [interval description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static interval (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/interval`, obj, callback);
	}

	/**
	 * [eta description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static eta (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/eta`, obj, callback);
	}

	/**
	 * [avgtxNumber description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static avgtxNumber (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/avgtxnumber`, obj, callback);
	}

	/**
	 * [getReceivedByAddress description]
	 * @param  {String}   address
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static getReceivedByAddress (address, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/getreceivedbyaddress/${address}`, undefined, callback);
	}

	/**
	 * [getSentByAddress description]
	 * @param  {String}   address
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static getSentByAddress (address, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/getsentbyaddress/${address}`, undefined, callback);
	}

	/**
	 * [addressBalance description]
	 * @param  {String}   address
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static addressBalance (address, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/addressbalance/${address}`, undefined, callback);
	}

	/**
	 * [addressFirstseen description]
	 * @param  {String}   address
	 * @param  {Object}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static addressFirstseen (address, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/addressfirstseen/${address}`, obj, callback);
	}

	/**
	 * [txTotalbtcOutput description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static txTotalbtcOutput (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/txtotalbtcoutput/${hash}`, obj, callback);
	}

	/**
	 * [txTotalbtcInput description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static txTotalbtcInput (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/txtotalbtcoutput/${hash}`, obj, callback);
	}

	/**
	 * [txFee description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static txFee (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/txtotalbtcoutput/${hash}`, obj, callback);
	}

	/**
	 * [txResult description]
	 * @param  {String}   hash
	 * @param  {String}   address
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static txResult (hash, address, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/txresult/${hash}/${address}`, obj, callback);
	}

	/**
	 * [hashtontxid description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static hashtontxid (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/hashtontxid/${hash}`, obj, callback);
	}

	/**
	 * [ntxidtohash description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static ntxidtohash (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/ntxidtohash/${hash}`, obj, callback);
	}

	/**
	 * [addressToHash description]
	 * @param  {String}   address
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static addressToHash (address, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/addresstohash/${address}`, obj, callback);
	}

	/**
	 * [hashToAddress description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static hashToAddress (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/hashtoaddress/${hash}`, obj, callback);
	}

	/**
	 * [hashPubKey description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static hashPubKey (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/hashpubkey/${hash}`, obj, callback);
	}

	/**
	 * [addrPubKey description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static addrPubKey (hash, obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/addrpubkey/${hash}`, obj, callback);
	}

	/**
	 * [pubKeyAddr description]
	 * @param  {String}   hash
	 * @param  {[type]}   obj
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static pubKeyAddr (hash, obj, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/pubkeyaddr`, obj, callback);
	}

	/**
	 * [newKey description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static newKey (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/newkey`, obj, callback);
	}

	/**
	 * [unconfirmedCount description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static unconfirmedCount (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/unconfirmedcount`, obj, callback);
	}

	/**
	 * [price24hr description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static price24hr (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/24hrprice`, obj, callback);
	}

	/**
	 * [marketCap description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static marketCap (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/marketcap`, obj, callback);
	}

	/**
	 * [transactionCount24hr description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static transactionCount24hr (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/24hrtransactioncount`, obj, callback);
	}

	/**
	 * [btcsent24hr description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static btcsent24hr (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/24hrbtcsent`, obj, callback);
	}

	/**
	 * [hashRate description]
	 * @param  {Object}   obj Query
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static hashRate (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/${chain._q}/hashrate`, obj, callback);
	}

	/**
	 * [rawblock description]
	 * @param  {String}   types
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static rawblock (types, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/rawblock/${types}`, {
			format : chain._format
		}, callback);
	}

	/**
	 * [rawTx description]
	 * @param  {String}   types
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static rawTx (types, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/rawtx/${types}`, {
			format : chain._format
		}, callback);
	}

	/**
	 * [blockHeight description]
	 * @param  {String}   types
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static blockHeight (types, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/block-height/${types}`, {
			format : chain._format
		}, callback);
	}

	/**
	 * [latestblock description]
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static latestblock (obj={}, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/latestblock`, obj, callback );
	}

	/**
	 * [unconfirmedTransactions description]
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static unconfirmedTransactions (callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/unconfirmed-transactions`, {
			format : chain._format
		}, callback);
	}

	/**
	 * [blocks description]
	 * @param  {String}   types
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static blocks (types, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/blocks/${types}`, {
			format : chain._format
		}, callback );
	}

	/**
	 * [inv description]
	 * @param  {String}   types
	 * @param  {Function} callback
	 * @return {Function}
	 */
	static inv (types, callback) {
		return chain.__Sender(`${chain._domain}/${chain._lang}/inv/${types}`, {
			format : chain._format
		}, callback );
	}

	/**
	 * [address description]
	 * @param  {String|Array}   types
	 * @param  {Function}       callback
	 * @return {Function}
	 */
	static  address (types, callback) {
		let urx = 'address';
		let active = null;

		if( Array.isArray(types) ){
			active = types.join('|');
			urx = 'multiaddr';
			types = '';
		}

		return chain.__Sender(`${chain._domain}/${chain._lang}/${urx}/${types}`, {
			format : chain._format,
			active
		}, callback );
	}

	/**
	* [unspent]
	* @param  {String|Array}   active
	* @param  {Function}       callback
	*/
	static unspent (active, callback) {
		if(!Array.isArray(active)){
			active = [ active ];
		}

		return chain.__Sender(`${chain._domain}/${chain._lang}/unspent`, {
			format : chain._format,
			active : active.join('|')
		}, callback );
	}

	/**
	 * Send the request
	 * @param  {String}   method   Url to crete the request
	 * @param  {object}   obj      Params incert
	 * @param  {Function} callback Function to callback
	 */
	static __Sender (method, obj={}, callback) {
		request(method + '?' + stringify(obj), (err, response, body) => {
			if(err || response.statusCode !== 200) {
				return callback(new Error(err ? err : response.statusCode));
			}

			try {
				let result = JSON.parse(body);
				if(result && result.error) {
					return callback(new Error(result.error), result);
				}

				return callback(null, result);
			} catch (err) {
				return callback(err, body);
			}
		});
	}
}