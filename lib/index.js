'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var request = _interopRequireWildcard(_request);

var _querystring = require('querystring');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
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
var chain = function () {

	/**
  * [constructor description]
  * @param  {String} guid            GUID for BlockCain
  * @param  {String} password        Password BlockChain
  * @param  {String} second_password Password Secund BlockCain
  * @param  {String} Key             API KEY
  * @param  {String} options.domain  Domain of BlockChain
  * @return {Object}
  */
	function chain(guid, pass, pas2, key, _ref) {
		var _ref$domain = _ref.domain,
		    domain = _ref$domain === undefined ? chain._domain : _ref$domain,
		    _ref$lang = _ref.lang,
		    lang = _ref$lang === undefined ? chain._lang : _ref$lang,
		    _ref$api = _ref.api,
		    api = _ref$api === undefined ? chain._api : _ref$api,
		    _ref$q = _ref.q,
		    q = _ref$q === undefined ? chain._q : _ref$q;

		_classCallCheck(this, chain);

		this._url = domain + '/' + lang;
		this._api = api;
		this._key = key;
		this.config = { guid: guid, pass: pass, pas2: pas2 };

		return this;
	}

	/**
  * [balance description]
  * @param  {Function} callback
  * @return {Function}
  */


	_createClass(chain, [{
		key: 'balance',
		value: function balance(callback) {
			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/balance', {
				password: this.config.pass
			}, callback);
		}

		/**
   * [list description]
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'list',
		value: function list(callback) {
			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/list', {
				password: this.config.pass
			}, callback);
		}

		/**
   * [addressBalance description]
   * @param  {String}   address
   * @param  {Number}   confirmations
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'addressBalance',
		value: function addressBalance(address) {
			var confirmations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
			var callback = arguments[2];

			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/address_balance', {
				password: this.config.pass,
				address: address,
				confirmations: confirmations
			}, callback);
		}

		/**
   * [newAddress description]
   * @param  {String}   label Label Name
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'newAddress',
		value: function newAddress(label, callback) {
			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/new_address', {
				password: this.config.pass,
				second_password: this.config.pas2,
				label: label
			}, callback);
		}

		/**
   * [archiveAddress description]
   * @param  {String}   address Address Bitcoin
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'archiveAddress',
		value: function archiveAddress(address, callback) {
			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/archive_address', {
				password: this.config.pass,
				second_password: this.config.pas2,
				address: address
			}, callback);
		}

		/**
   * [unarchiveAddress description]
   * @param  {String}   address Address Bitcoin
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'unarchiveAddress',
		value: function unarchiveAddress(address, callback) {
			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/unarchive_address', {
				password: this.config.pass,
				second_password: this.config.pas2,
				address: address
			}, callback);
		}

		/**
   * [autoConsolidate description]
   * @param  {Number}   days
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'autoConsolidate',
		value: function autoConsolidate(days, callback) {
			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/auto_consolidate', {
				password: this.config.pass,
				second_password: this.config.pas2,
				days: days
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

	}, {
		key: 'payment',
		value: function payment(to, amount, obj, callback) {
			var params = {
				to: to, amount: amount,
				password: this.config.pass,
				second_password: this.config.pas2
			};

			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object') {
				for (var i in obj) {
					params[i] = obj[i];
				}
			}

			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/payment', params, callback);
		}

		/**
   * [sendMany description]
   * @param  {Object}   recipients
   * @param  {Object}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'sendMany',
		value: function sendMany(recipients, obj, callback) {
			var params = {
				recipients: JSON.stringify(recipients),
				password: this.config.pass,
				second_password: this.config.pas2
			};

			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object') {
				for (var i in obj) {
					params[i] = obj[i];
				}
			}

			return chain.__Sender(this._url + '/merchant/' + this.config.guid + '/sendmany', obj, callback);
		}

		/**
   * [receivePayments description]
   * @param  {String}   xpub
   * @param  {Function} callback
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'receivePayments',
		value: function receivePayments(xpub, callback, result) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/receive', {
				key: this._key,
				xpub: xpub, callback: callback
			}, result);
		}

		/**
   * [callbackLogPayments description]
   * @param  {Function} callback
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'callbackLogPayments',
		value: function callbackLogPayments(callback, result) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/receive/callback_log', {
				key: this._key,
				callback: callback
			}, result);
		}

		/**
   * [createWallet description]
   * @param  {Object}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}], [{
		key: 'createWallet',
		value: function createWallet() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._api + '/create_wallet', obj, callback);
		}

		/**
   * [chart description]
   * @param  {String}   type
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'chart',
		value: function chart(type, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/charts/' + type, {
				format: chain._format
			}, callback);
		}

		/**
   * [ticker description]
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'ticker',
		value: function ticker() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/ticker', obj, callback);
		}

		/**
   * [toBTC description]
   * @param  {String}   currency
   * @param  {Number}   value
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'toBTC',
		value: function toBTC() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
			var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/tobtc', {
				currency: currency, value: value
			}, callback);
		}

		/**
   * [stats description]
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'stats',
		value: function stats() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/stats', obj, callback);
		}

		/**
   * [getDifficulty description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'getDifficulty',
		value: function getDifficulty() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/getdifficulty', obj, callback);
		}

		/**
   * [getBlockCount description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'getBlockCount',
		value: function getBlockCount() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/getblockcount', obj, callback);
		}

		/**
   * [latesthash description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'latesthash',
		value: function latesthash() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/latesthash', obj, callback);
		}

		/**
   * [bcperBlock description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'bcperBlock',
		value: function bcperBlock() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/bcperblock', obj, callback);
		}

		/**
   * [totalBc description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'totalBc',
		value: function totalBc() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/totalbc', obj, callback);
		}

		/**
   * [probability description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'probability',
		value: function probability() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/probability', obj, callback);
		}

		/**
   * [hashestowin description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'hashestowin',
		value: function hashestowin() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/hashestowin', obj, callback);
		}

		/**
   * [nextreTarget description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'nextreTarget',
		value: function nextreTarget() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/nextretarget', obj, callback);
		}

		/**
   * [avgtxSize description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'avgtxSize',
		value: function avgtxSize() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/avgtxsize', obj, callback);
		}

		/**
   * [avgtxValue description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'avgtxValue',
		value: function avgtxValue() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/avgtxvalue', obj, callback);
		}

		/**
   * [interval description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'interval',
		value: function interval() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/interval', obj, callback);
		}

		/**
   * [eta description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'eta',
		value: function eta() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/eta', obj, callback);
		}

		/**
   * [avgtxNumber description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'avgtxNumber',
		value: function avgtxNumber() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/avgtxnumber', obj, callback);
		}

		/**
   * [getReceivedByAddress description]
   * @param  {String}   address
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'getReceivedByAddress',
		value: function getReceivedByAddress(address, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/getreceivedbyaddress/' + address, undefined, callback);
		}

		/**
   * [getSentByAddress description]
   * @param  {String}   address
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'getSentByAddress',
		value: function getSentByAddress(address, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/getsentbyaddress/' + address, undefined, callback);
		}

		/**
   * [addressBalance description]
   * @param  {String}   address
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'addressBalance',
		value: function addressBalance(address, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/addressbalance/' + address, undefined, callback);
		}

		/**
   * [addressFirstseen description]
   * @param  {String}   address
   * @param  {Object}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'addressFirstseen',
		value: function addressFirstseen(address) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/addressfirstseen/' + address, obj, callback);
		}

		/**
   * [txTotalbtcOutput description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'txTotalbtcOutput',
		value: function txTotalbtcOutput(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/txtotalbtcoutput/' + hash, obj, callback);
		}

		/**
   * [txTotalbtcInput description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'txTotalbtcInput',
		value: function txTotalbtcInput(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/txtotalbtcoutput/' + hash, obj, callback);
		}

		/**
   * [txFee description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'txFee',
		value: function txFee(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/txtotalbtcoutput/' + hash, obj, callback);
		}

		/**
   * [txResult description]
   * @param  {String}   hash
   * @param  {String}   address
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'txResult',
		value: function txResult(hash, address) {
			var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var callback = arguments[3];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/txresult/' + hash + '/' + address, obj, callback);
		}

		/**
   * [hashtontxid description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'hashtontxid',
		value: function hashtontxid(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/hashtontxid/' + hash, obj, callback);
		}

		/**
   * [ntxidtohash description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'ntxidtohash',
		value: function ntxidtohash(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/ntxidtohash/' + hash, obj, callback);
		}

		/**
   * [addressToHash description]
   * @param  {String}   address
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'addressToHash',
		value: function addressToHash(address) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/addresstohash/' + address, obj, callback);
		}

		/**
   * [hashToAddress description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'hashToAddress',
		value: function hashToAddress(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/hashtoaddress/' + hash, obj, callback);
		}

		/**
   * [hashPubKey description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'hashPubKey',
		value: function hashPubKey(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/hashpubkey/' + hash, obj, callback);
		}

		/**
   * [addrPubKey description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'addrPubKey',
		value: function addrPubKey(hash) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/addrpubkey/' + hash, obj, callback);
		}

		/**
   * [pubKeyAddr description]
   * @param  {String}   hash
   * @param  {[type]}   obj
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'pubKeyAddr',
		value: function pubKeyAddr(hash, obj, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/pubkeyaddr', obj, callback);
		}

		/**
   * [newKey description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'newKey',
		value: function newKey() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/newkey', obj, callback);
		}

		/**
   * [unconfirmedCount description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'unconfirmedCount',
		value: function unconfirmedCount() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/unconfirmedcount', obj, callback);
		}

		/**
   * [price24hr description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'price24hr',
		value: function price24hr() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/24hrprice', obj, callback);
		}

		/**
   * [marketCap description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'marketCap',
		value: function marketCap() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/marketcap', obj, callback);
		}

		/**
   * [transactionCount24hr description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'transactionCount24hr',
		value: function transactionCount24hr() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/24hrtransactioncount', obj, callback);
		}

		/**
   * [btcsent24hr description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'btcsent24hr',
		value: function btcsent24hr() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/24hrbtcsent', obj, callback);
		}

		/**
   * [hashRate description]
   * @param  {Object}   obj Query
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'hashRate',
		value: function hashRate() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + chain._q + '/hashrate', obj, callback);
		}

		/**
   * [rawblock description]
   * @param  {String}   types
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'rawblock',
		value: function rawblock(types, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/rawblock/' + types, {
				format: chain._format
			}, callback);
		}

		/**
   * [rawTx description]
   * @param  {String}   types
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'rawTx',
		value: function rawTx(types, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/rawtx/' + types, {
				format: chain._format
			}, callback);
		}

		/**
   * [blockHeight description]
   * @param  {String}   types
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'blockHeight',
		value: function blockHeight(types, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/block-height/' + types, {
				format: chain._format
			}, callback);
		}

		/**
   * [latestblock description]
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'latestblock',
		value: function latestblock(callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/latestblock', params, callback);
		}

		/**
   * [unconfirmedTransactions description]
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'unconfirmedTransactions',
		value: function unconfirmedTransactions(callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/unconfirmed-transactions', {
				format: chain._format
			}, callback);
		}

		/**
   * [blocks description]
   * @param  {String}   types
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'blocks',
		value: function blocks(types, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/blocks/' + types, {
				format: chain._format
			}, callback);
		}

		/**
   * [inv description]
   * @param  {String}   types
   * @param  {Function} callback
   * @return {Function}
   */

	}, {
		key: 'inv',
		value: function inv(types, callback) {
			return chain.__Sender(chain._domain + '/' + chain._lang + '/inv/' + types, {
				format: chain._format
			}, callback);
		}

		/**
   * [address description]
   * @param  {String|Array}   types
   * @param  {Function}       callback
   * @return {Function}
   */

	}, {
		key: 'address',
		value: function address(types, callback) {
			var urx = 'address';
			var active = null;

			if (Array.isArray(types)) {
				active = types.join('|');
				urx = 'multiaddr';
				types = '';
			}

			return chain.__Sender(chain._domain + '/' + chain._lang + '/' + urx + '/' + types, {
				format: chain._format,
				active: active
			}, callback);
		}

		/**
  * [unspent]
  * @param  {String|Array}   active
  * @param  {Function}       callback
  */

	}, {
		key: 'unspent',
		value: function unspent(active, callback) {
			if (!Array.isArray(active)) {
				active = [active];
			}

			return chain.__Sender(chain._domain + '/' + chain._lang + '/unspent', {
				format: chain._format,
				active: active.join('|')
			}, callback);
		}

		/**
   * Send the request
   * @param  {String}   method   Url to crete the request
   * @param  {object}   obj      Params incert
   * @param  {Function} callback Function to callback
   */

	}, {
		key: '__Sender',
		value: function __Sender(method) {
			var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var callback = arguments[2];

			request(method + '?' + (0, _querystring.stringify)(obj), function (err, response, body) {
				if (err || response.statusCode !== 200) {
					return callback(new Error(err ? err : response.statusCode));
				}

				try {
					var result = JSON.parse(body);
					if (result && result.error) {
						return callback(new Error(result.error), result);
					}

					return callback(null, result);
				} catch (err) {
					return callback(err, body);
				}
			});
		}
	}]);

	return chain;
}();

chain._format = 'json';
chain._domain = 'https://blockchain.info';
chain._lang = 'es';
chain._api = 'https://api.blockchain.info/v2/';
chain._q = 'q';
exports.default = chain;