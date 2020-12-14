
export const changeUrlHash = (val: string) => {
    window.location.hash = val;
}

export const clearUrlHash = () => {
    window.history.pushState("", document.title, window.location.pathname
                                                       + window.location.search)
}