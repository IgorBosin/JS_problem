// ПОПРОБОВАТЬ БЕЗ КРУГЛЫХ СКОБОК В ФУНКЦИИ
// СВОЙСТВА ОБЪЕКТА firstPost НЕ ДОЛЖНО ИЗМЕНЯТЬСЯ. ПО ЛОГИКЕ НЕОБХОДИМО ДОБАВИТЬ return, НО ВЫДАЕТ ОШИБКУ У ...
const firstPost={
    id: 1,
    autor: 'Igor',
}
const newPost = (post, addedAt = Date())=> ({
    ...post,
    addedAt: addedAt,
})

console.log(newPost(firstPost))
console.log(firstPost)

