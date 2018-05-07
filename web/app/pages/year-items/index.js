import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var YearItemsPage = ATV.Page.create({
	name: 'year-items',
	template: template,
	ready(options, resolve, reject) {
		resolve({
			movies: staticData(12),
			tvShows: staticData(12)
		});
	}
});

export default YearItemsPage;