var request = require('request'),
	querystring = require('querystring');

function blockChain (domain, lang) {
	this._domain = domain || 'https://blockchain.info/';
	this._lang = ( lang || 'es' ) + '/';
	var self = this;

	this.wallet = function(guid, pass1, pass2) {
		self._guid = guid;
		self._pass1 = pass1;
		self._pass2 = pass2;
		return self.wallet;
	};

	this.wallet.balance = function (params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}

		params.password = self._pass1;
		self.__Sender(self._lang + 'merchant', self._guid + '/balance', params, callback );
	};

	this.wallet.list = function(callback) {
		self.__Sender(self._lang + 'merchant', self._guid + '/list', {
			password : self._pass1
		}, callback );
	};

	this.wallet.addressBalance = function(address, confirmations, callback) {
		self.__Sender(self._lang + 'merchant', self._guid + '/address_balance', {
			password : self._pass1,
			address: address,
			confirmations: confirmations
		}, callback );
	};

	this.wallet.payment = function(to, amount, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}

		params.to = to;
		params.amount = amount;
		params.password = self._pass1;
		params.second_password = self._pass2;
		self.__Sender(self._lang + 'merchant', self._guid + '/payment', params, callback );
	};

	this.wallet.sendMany = function(recipients, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}

		params.password = self._pass1;
		params.second_password = self._pass2;
		params.recipients = JSON.stringify(recipients);
		self.__Sender(self._lang + 'merchant', self._guid + '/sendmany', params, callback );
	};

	this.wallet.newAddress = function(params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}

		params.password = self._pass1;
		params.second_password = self._pass2;
		self.__Sender(self._lang + 'merchant', self._guid + '/new_address', params, callback );
	};

	this.wallet.archiveAddress = function(address, callback) {
		self.__Sender(self._lang + 'merchant', self._guid + '/archive_address', {
			password : self._pass1,
			second_password : self._pass2,
			'address': address
		}, callback );
	};

	this.wallet.unarchiveAddress = function(address, callback) {
		self.__Sender(self._lang + 'merchant', self._guid + '/unarchive_address', {
			password : self._pass1,
			second_password : self._pass2,
			'address': address
		}, callback );
	};

	this.wallet.autoConsolidate = function(days, callback) {
		self.__Sender(self._lang + 'merchant', self._guid + '/auto_consolidate', {
			password : self._pass1,
			second_password : self._pass2,
			'days': days
		}, callback );
	};

	this.receive = function(address, url, callback) {
		self.__Sender('api', 'receive', {
			method: 'create',
			'address': address,
			callback : url
		}, callback );
	};

	this.createWallet = function(params, callback) {
		self.__Sender(self._lang + 'api', 'v2/create_wallet', params, callback );
	};

	this.query = function () {
		return this.query;
	};

	this.query.getdifficulty = function (params, callback) {
		self.__Sender(self._lang + 'q', 'getdifficulty', params, callback );
	};
	this.query.getblockcount = function (params, callback) {
		self.__Sender(self._lang + 'q', 'getblockcount', params, callback );
	};
	this.query.latesthash = function (params, callback) {
		self.__Sender(self._lang + 'q', 'latesthash', params, callback );
	};
	this.query.bcperblock = function (params, callback) {
		self.__Sender(self._lang + 'q', 'bcperblock', params, callback );
	};
	this.query.totalbc = function (params, callback) {
		self.__Sender(self._lang + 'q', 'totalbc', params, callback );
	};
	this.query.probability = function (params, callback) {
		self.__Sender(self._lang + 'q', 'probability', params, callback );
	};
	this.query.hashestowin = function (params, callback) {
		self.__Sender(self._lang + 'q', 'hashestowin', params, callback );
	};
	this.query.nextretarget = function (params, callback) {
		self.__Sender(self._lang + 'q', 'nextretarget', params, callback );
	};
	this.query.avgtxsize = function (params, callback) {
		self.__Sender(self._lang + 'q', 'avgtxsize', params, callback );
	};
	this.query.avgtxvalue = function (params, callback) {
		self.__Sender(self._lang + 'q', 'avgtxvalue', params, callback );
	};
	this.query.interval = function (params, callback) {
		self.__Sender(self._lang + 'q', 'interval', params, callback );
	};
	this.query.eta = function (params, callback) {
		self.__Sender(self._lang + 'q', 'eta', params, callback );
	};
	this.query.avgtxnumber = function (params, callback) {
		self.__Sender(self._lang + 'q', 'avgtxnumber', params, callback );
	};
	this.query.getreceivedbyaddress = function (address, params, callback) {
		self.__Sender(self._lang + 'q', 'getreceivedbyaddress/' + address, params, callback );
	};
	this.query.getsentbyaddress = function (address, params, callback) {
		self.__Sender(self._lang + 'q', 'getsentbyaddress/' + address, params, callback );
	};
	this.query.addressbalance = function (address, params, callback) {
		self.__Sender(self._lang + 'q', 'addressbalance/' + address, params, callback );
	};
	this.query.addressfirstseen = function (address, params, callback) {
		self.__Sender(self._lang + 'q', 'addressfirstseen/' + address, params, callback );
	};
	this.query.txtotalbtcoutput = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'txtotalbtcoutput/' + hash, params, callback );
	};
	this.query.txtotalbtcinput = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'txtotalbtcoutput/' + hash, params, callback );
	};
	this.query.txfee = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'txtotalbtcoutput/' + hash, params, callback );
	};
	this.query.txresult = function (hash, address, params, callback) {
		self.__Sender(self._lang + 'q', 'txresult/'+ hash + '/' + address, params, callback );
	};
	this.query.hashtontxid = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'hashtontxid/' + hash, params, callback );
	};
	this.query.ntxidtohash = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'ntxidtohash/' + hash, params, callback );
	};
	this.query.addresstohash = function (address, params, callback) {
		self.__Sender(self._lang + 'q', 'addresstohash/' + address, params, callback );
	};
	this.query.hashtoaddress =function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'hashtoaddress/' + hash, params, callback );
	};
	this.query.hashpubkey = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'hashpubkey/' + hash, params, callback );
	};
	this.query.addrpubkey = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'addrpubkey/' + hash, params, callback );
	};
	this.query.pubkeyaddr = function (hash, params, callback) {
		self.__Sender(self._lang + 'q', 'pubkeyaddr', params, callback );
	};
	this.query.newkey = function (params, callback) {
		self.__Sender(self._lang + 'q', 'newkey', params, callback );
	};
	this.query.unconfirmedcount = function (params, callback) {
		self.__Sender(self._lang + 'q', 'unconfirmedcount', params, callback );
	};
	this.query.price24hr = function (params, callback) {
		self.__Sender(self._lang + 'q', '24hrprice', params, callback );
	};
	this.query.marketcap = function (params, callback) {
		self.__Sender(self._lang + 'q', 'marketcap', params, callback );
	};
	this.query.transactioncount24hr = function (params, callback) {
		self.__Sender(self._lang + 'q', '24hrtransactioncount', params, callback );
	};
	this.query.btcsent24hr = function (params, callback) {
		self.__Sender(self._lang + 'q', '24hrbtcsent', params, callback );
	};
	this.query.hashrate = function (params, callback) {
		self.__Sender(self._lang + 'q', 'hashrate', params, callback );
	};
	this.query.rejected = function (params, callback) {
		self.__Sender(self._lang + 'q', 'rejected', params, callback );
	};


	this.chart = function (type, params, callback) {
		self.__Sender(self._lang + 'charts', type, params, callback );
	};

	this.exchange = function (type, params, callback) {
		self.__Sender(self._lang + type, false, params, callback );
	};

	this.api = function (types) {
		self._type = types || 'json';
		return self.api;
	};

	this.api.rawblock = function (types, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		params.format = self._type;
		self.__Sender(self._lang + 'rawblock', types, params, callback );
	};

	this.api.rawTx = function (types, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		params.format = self._type;
		self.__Sender(self._lang + 'rawtx', types, params, callback );
	};

	this.api.blockHeight = function (types, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		params.format = self._type;
		self.__Sender(self._lang + 'block-height', types, params, callback );
	};

	this.api.address = function (types, params, callback) {
		var urx = 'address';
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		if(Array.isArray(types)){
			params.active = types.join('|');
			urx = 'multiaddr';
		}

		params.format = self._type;
		self.__Sender(self._lang + urx, types, params, callback );
	};

	this.api.unspent = function (types, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		if(!Array.isArray(types))
			types = [ types ];

		params.active = types.join('|');
		params.format = self._type;
		self.__Sender(self._lang + 'unspent', types, params, callback );
	};

	this.api.latestblock = function (params, callback) {
		self.__Sender(self._lang + 'latestblock', false, params, callback );
	};

	this.api.unconfirmedTransactions = function (params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		params.format = self._type;
		self.__Sender(self._lang + 'unconfirmed-transactions', false, params, callback );
	};

	this.api.blocks = function (types, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		params.format = self._type;
		self.__Sender(self._lang + 'blocks', types, params, callback );
	};

	this.api.inv = function (types, params, callback) {
		if(typeof params === 'function'){
			callback = params;
			params = {};
		}
		params.format = self._type;
		self.__Sender(self._lang + 'inv', types, params, callback );
	};
}

blockChain.prototype.__Sender = function (method, uri, params, callback) {
	if(typeof params === 'function'){
		callback = params;
		params = {};
	}

	var queryString = querystring.stringify(params);

	request(this._domain + method + ( uri ? '/' + uri : '' ) + '?' + queryString, function (err, response, body){
		if(err || response.statusCode !== 200) {
			return callback(new Error(err ? err : response.statusCode));
		}

		if( /\d/.test(body[0]) )
			return callback(err, parseFloat(body) );

		var result;
		try {
			result = JSON.parse(body);
		} catch (error) {
			return callback(error);
		}

		if(result.error) {
			return callback(new Error(result.error));
		}

		callback(null, result);
	});
};

module.exports = blockChain;
