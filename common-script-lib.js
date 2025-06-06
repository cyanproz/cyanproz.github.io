class GlobalLib {
    ajaxJsonPhpErrorHandler(response) {
        return response.clone().json().catch(() => {
            return response.text().then(text => {
                throw new Error("Server error (not JSON):\n" + text);
            });
        });
    }
}

export { GlobalLib };
