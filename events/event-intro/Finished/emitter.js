function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function(type, listener) {   // listener which is a callback
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener(); // invoking callback;
		});
	}
}

module.exports = Emitter;