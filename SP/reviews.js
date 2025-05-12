const AIRTABLE_API_KEY = 'patkQWSChcOtypfTX.9f2bf544df83476cf0e76943c3fc8e73968ab7c69a298406f4857881e05e7e2d'; // Замените на свой токен
const AIRTABLE_BASE_ID = 'apptddklrngeQw39w'; // Оставьте Base ID
const AIRTABLE_TABLE_NAME = 'Отзывы';

// Функция для сохранения отзыва в Airtable
async function saveReview(name, text, productId) {
    try {
        const data = {
            "fields": {
                "Имя": name,
                "Отзыв": text,
                "ID товара": productId,
                "Дата": new Date().toISOString()
            }
        };

        const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,  // Используем токен
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.status === 200) {
            console.log("Отзыв успешно сохранен в Airtable! ID:", result.id);
            return result.id;
        } else {
            console.error("Ошибка при сохранении отзыва в Airtable:", result);
            return null;
        }

    } catch (error) {
        console.error("Ошибка при отправке запроса в Airtable:", error);
        return null;
    }
}

// Функция для получения отзывов из Airtable
async function getReviews(productId) {
    try {
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}?filterByFormula=({ID товара}="${productId}")&sort[0][field]=Дата&sort[0][direction]=desc`;
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`  // Используем токен
            }
        });

        const result = await response.json();

        if (response.status === 200) {
            const reviews = result.records.map(record => ({
                id: record.id,
                name: record.fields["Имя"],
                text: record.fields["Отзыв"],
                date: record.fields["Дата"]
            }));
            return reviews;
        } else {
            console.error("Ошибка при получении отзывов из Airtable:", result);
            return [];
        }

    } catch (error) {
        console.error("Ошибка при получении отзывов из Airtable:", error);
        return [];
    }
}