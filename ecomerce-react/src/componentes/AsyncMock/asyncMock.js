const productos = [
    {
        id: '1',
        nombre: 'Boca Juniors 2000/01',
        talles: 'S-M-L-XL',
        precio: 40000,
        categoria: 'Remera',
        img: 'https://acdn.mitiendanube.com/stores/002/292/348/products/1ae208eb1-ff12d974075e5c01b616721875092829-1024-1024.jpg',
        stock: 3,
        descripcion: 'informacion sobre la remera, partido mas emblematico en la que se uso, epoca jugaroes que la usaron, etc.'
    },
    {
        id: '2',
        nombre: 'Argentina 2022',
        talles: 'S-M-L-XL',
        precio: 25000,
        categoria: 'Pantalon',
        img: 'https://www.xutgol.com/img/pantalon-argentina-mundial-2022-color-negro_3054.jpg',
        stock: 8,
        descripcion: 'informacion sobre la remera, partido mas emblematico en la que se uso, epoca jugaroes que la usaron, etc.'
    },
    {
        id: '3',
        nombre: 'Argentina 2023',
        talles: 'S-M-L-XL',
        precio: 40000,
        categoria: 'Conjunto',
        img: 'https://playfutboles.com/wp-content/uploads/2023/08/IMG-4144.jpg',
        stock: 10,
        descripcion: 'informacion sobre la remera, partido mas emblematico en la que se uso, epoca jugaroes que la usaron, etc.'
    },
    {
        id: '4',
        nombre: 'España 2010',
        talles: 'S-XL',
        precio: 50000,
        categoria: 'Remera',
        img: 'https://tecalzoshoes.com/wp-content/uploads/2023/09/1267525263_extras_noticia_foton_7_0.jpeg',
        stock: 2,
        descripcion: 'informacion sobre la remera, partido mas emblematico en la que se uso, epoca jugaroes que la usaron, etc.'  
    },
    {
        id: '5',
        nombre: 'Inter 1996/97',
        talles: 'M-L-XL',
        precio: 55000,
        categoria: 'Remera',
        img: 'https://www.vintagefootballclub.com/wp-content/uploads/2022/11/inter-1996-97-1-700x700.jpg.webp',
        stock: 1,
        descripcion: 'informacion sobre la remera, partido mas emblematico en la que se uso, epoca jugaroes que la usaron, etc.'
    },
    {
        id: '6',
        nombre: 'Real Betis 1995/96',
        talles: 'M-L',
        precio: 40000,
        categoria: 'Remera',
        img: 'https://trizhop.com/wp-content/uploads/2021/03/760721f9-1.jpg',
        stock: 5,
        descripcion: 'informacion sobre la remera, partido mas emblematico en la que se uso, epoca jugaroes que la usaron, etc.'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductosByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaId))
        }, 1000)
    })
}

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 1000)
    })
}