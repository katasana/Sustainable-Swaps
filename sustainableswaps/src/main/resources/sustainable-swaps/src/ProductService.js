export async function getAllProducts(page) {
    page.push('/searchresults');
    const response = await fetch('/database/get-all');
    return await response.json();
}