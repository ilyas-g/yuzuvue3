// fetch.js
import { ref, isRef, unref, watchEffect } from 'vue';

export function useFetch(url) {
    const fetchData = ref(null);
    const fetchError = ref(null);

    function doFetch() {
        // reset state before fetching..
        fetchData.value = null;
        fetchError.value = null;
        // unref() unwraps potential refs
        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => (fetchData.value = json))
            .catch((err) => (fetchError.value = err));
    }

    if (isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch);
    } else {
        // otherwise, just fetch once
        // and avoid the overhead of a watcher
        doFetch();
    }

    return { fetchData, fetchError };
}
