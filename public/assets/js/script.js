const global = {

    getTemplateSlot: (elementName) => {
        return $(`#${elementName}-slot`);
    },

    formatElementName: (elementName) => {
        return elementName.charAt(0).toUpperCase() + elementName.slice(1);
    },

    getTemplate: async (elementName) => {
        elementName = global.formatElementName(elementName);
        const template = await fetch(`/assets/components/${elementName}/${elementName.toLowerCase()}.html`);
        return template.text();
    },

    insertCSSToHead: (elementName) => {
        elementName = global.formatElementName(elementName);
        let found = false;
        const href = `/assets/components/${elementName}/${elementName.toLowerCase()}.css`;
        $("head link[rel='stylesheet']").last().after(`<link rel='stylesheet' href='${href}' type='text/css' media='screen'>`);
    },

    appendChildrenToSlot: (slot, elements) => {
        elements.forEach(element => {
            slot.append(`${element.render()}`);
        })
    },

    initMap: (lat, lng) => {
        const coordinates = {lat: lat, lng: lng};
        const mapSlot = $('#map');
        const map = new google.maps.Map(
            mapSlot[0],
            {zoom: 14, center: coordinates, gestureHandling: 'none'}
        );
        new google.maps.Marker({position: coordinates, map: map});

        mapSlot.click(() => {
            window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank')
        })
    },

    fetchData: (endpoint, queryString = '') => {
        return fetch(`/v1${endpoint}?${queryString}`);
    },

    format_date_dd_Month_yyyy: (date) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate()} ${dateObj.toLocaleString('en-US', { month: 'long' })} ${dateObj.getFullYear()}`;
    },

    format_date_yyyy: (date) => {
        return new Date(date).getFullYear();
    },

    insertDataIntoDOM: (data) => {
        $('[data-type="string"]').each((i, el) => {
            $(el).html(
                _.get(data, $(el).attr('data-value'))
            );
        })

        $('[data-type="concat-string"]').each((i, el) => {
            values = Array.from($(el).attr('data-value').split("|"));
            $(el).html(values.map(val => _.get(data, val))
                            .join($(el).attr('data-separator')));
        });


        $('[data-type="image"]').each((i, el) => {
            $(el).attr('src', 
                _.get(data, $(el).attr('data-value'))
            );
        })

        $('[data-type="date"]').each((i, el) => {
            $(el).html(
                global[`format_date_${$(el).attr('data-format')}`](
                    _.get(data, $(el).attr('data-value'))
                )
            );
        })

    }
}