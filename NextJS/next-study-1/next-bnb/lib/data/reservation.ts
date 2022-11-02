import { readFileSync, writeFileSync } from "fs"

const getList = () => {
  const reservationBuffer = readFileSync("data/reservations.json");
  const reservationString = reservationBuffer.toString();

  if (!reservationString) {
    return [];
  }
  const reservations: StoredReservation[] = JSON.parse(reservationString);
  return reservations;
}

const exist = (reservationId: number) => {
  const reservations = getList();
  return reservations.some((room) => room.id === reservationId);
};

const find = (reservationId: number) => {
  const reservations = getList();
  return reservations.find((room) => room.id === reservationId);
};

const write = (reservations: StoredReservation[]) => {
  writeFileSync("data/reservations.json", JSON.stringify(reservations));
};

export default { getList, exist, write, find };
