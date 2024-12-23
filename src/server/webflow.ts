const localeMap = {
    en: "en-locale-id",
    de: "de-locale-id",
};

const mockCMSItems = [
    {
        id: "6675c0e04f099f8cb3840299",
        collectionId: "66213454fe3fa910e0b30733",
        locale: "en",
        fieldData: {
            slug: "osteopathy",
            name: "Osteopathy",
            "hero---description":
                "<p>Osteopathy is a holistic manual therapy.</p>",
        },
    },
    {
        id: "6675c0e04f099f8cb3840299",
        collectionId: "66213454fe3fa910e0b30733",
        locale: "de",
        fieldData: {
            slug: "osteopathy",
            name: "Osteopathie",
            "hero---description":
                "<p>Osteopathie ist eine ganzheitliche manuelle Therapie.</p>",
        },
    },
];

class Webflow {
    async getCMSItem(
        collectionId: string,
        itemId: string,
        locale: "en" | "de"
    ) {
        const filteredItems = mockCMSItems.filter(
            (item) =>
                item.collectionId === collectionId &&
                item.id === itemId &&
                item.locale === locale
        );
        return filteredItems.length > 0 ? filteredItems[0] : null;
    }

    async getCMSItemsBySlug(
        collectionId: string,
        slug: string,
        locale: "en" | "de"
    ) {
        const filteredItems = mockCMSItems.filter(
            (item) =>
                item.collectionId === collectionId &&
                item.fieldData.slug === slug &&
                item.locale === locale
        );
        return filteredItems.length > 0 ? filteredItems[0] : null;
    }
}

export default Webflow;
