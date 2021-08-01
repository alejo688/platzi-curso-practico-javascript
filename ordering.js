//functions of ordering methods on javascript

/**
 * method bubble: this method organize the elements to the list if next element is value major on the before element and change position
 */

export function bubble(list)
{
    const listLength = list.length;
    let aux = 0;
    for (let i = 1; i < listLength; i++)
    {
        for (let j = 0; j < listLength; j++)
        {
            if (list[j] > list[j + 1])
            {
                aux = list[j];
                list[j] = list[j + 1];
                list[j + 1] = aux;
            }
        }
    }
    return list;
}

