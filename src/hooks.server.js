export function handleError({ event, error }) {
    console.error(error.stack);
    return {
        message: 'Cannot process the request',
        code: 420,
    }
}