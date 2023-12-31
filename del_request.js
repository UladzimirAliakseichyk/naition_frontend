const deleteNotion = async (notionId) => {
    try {
        const response = await fetch(`https://uladzimir.pythonanywhere.com/api/notions/${notionId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // Дополнительные заголовки, если необходимо
            },
        });
        if (response.ok) {
            console.log(`Заметка с ID ${notionId} успешно удалена`);
            // Дополнительные действия после успешного удаления
        } else {
            console.error('Ошибка при удалении заметки');
            // Дополнительные действия при ошибке удаления
        }
    } catch (error) {
        console.error('Ошибка:', error);
        // Обработка ошибок запроса
    }
};


export {deleteNotion};