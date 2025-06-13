export class GlobalLib {
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static async awaitWhile(conditionFunc, interval = 100) {
        while (conditionFunc()) {
            await delay(interval);
        }
    }

    static ajaxJsonPhpErrorHandler(response) {
        return response.clone().json().catch(() => {
            return response.text().then(text => {
                throw new Error(text);
            });
        });
    }
}
