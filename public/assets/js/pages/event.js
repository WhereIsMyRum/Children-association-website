(async () => {
    let volounteerTemplate, serviceTemplate, testimonialTemplate;
    const queryParams = new URLSearchParams(window.location.search);

    // Fetch data
    let eventData = await global.fetchData(`/events/${queryParams.get('id')}`);

    // Get data JSON, fetch templates
    [ eventData, volounteerTemplate, serviceTemplate, testimonialTemplate ] = await Promise.all([
        eventData.json(), global.getTemplate('volounteer-large'), 
        global.getTemplate('service-large'), global.getTemplate('testimonial')
    ]);

    // insert global data
    global.insertDataIntoDOM(eventData);

    // initialize map widget
    if (typeof(google) !== 'undefined') {
        global.initMap(eventData.location.latitude, eventData.location.longitude);
    }

    // initialize volounteers
    const volounteers = [new VolounteerLarge(eventData.manager.thumbnail, 'volounteer-large', ['id', 'thumbnail', 'title', 'thumbnail_desc'], volounteerTemplate)];

    // initialize services
    const services = eventData.services.map(data => new ServiceLarge(data.thumbnail, 'service-large', ['id', 'thumbnail', 'title', 'thumbnail_desc'], serviceTemplate));

    // initialize testimonials
    const testimonials = eventData.testimonials.map(data => new Testimonial(data, 'testimonial', ['id', 'person_desc', 'testimonial', 'photo'], testimonialTemplate));

    // add template's css
    global.insertCSSToHead('volounteer-large');
    global.insertCSSToHead('service-large');
    global.insertCSSToHead('testimonial');

    // insert elements into DOM
    global.appendChildrenToSlot(global.getTemplateSlot('volounteers'), volounteers);
    global.appendChildrenToSlot(global.getTemplateSlot('services'), services)
    global.appendChildrenToSlot(global.getTemplateSlot('testimonial'), testimonials)
})();

