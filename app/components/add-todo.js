import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		submit() {
			const text = this.get('text');
			this.get('onAdd')(text); // Get the text from the input box
			this.set('text', ""); // Empty the input box
			this.$('input').focus(); // Focus the cursor in the input box
		}
	}
	
});
