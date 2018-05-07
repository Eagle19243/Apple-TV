import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var YearsPage = ATV.Page.create({
	name: 'years',
	template: template,
	ready(options, resolve, reject) {
		resolve({
			movies: staticData(12),
			tvShows: staticData(12)
		});
	}
});

export default YearsPage;