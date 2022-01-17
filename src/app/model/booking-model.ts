export type room = {
  no: number,
  is_booked: boolean,
  no_seats: number
}

export type floor = {
  no: number,
  rooms: room[]
}

export type building = {
  no: number,
  name: string,
  images: any[],
  floors: floor[]
}

export type block = {
  no: number,
  name: string,
  map: any
  buildings: building[]
}

export type department = {
  no: number,
  name: string,
  map: any
  blocks: block[]
}

export type UOK = {
  departments: department[]
}
