type Data = {
    [key: string]: string
}

type Item = {
    id: string
    name: string
    data: Data
}

export type Items = Item[]