// Tip.jsx: Redux reducer, valdantis kalendoriaus būsenos pasikeitimus.
// Tip.jsx: valdys kalendoriaus būseną, pvz., atidarytas dienas.

import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        openedDays: [],
        advices: {
            1: "Diena 1: Prisimink, gyvenimas kaip kalendorius, po vieną dieną, kol baigsis.",
            2: "Diena 2: Jei manai, kad tavo diena buvo bloga, prisimink, yra žmonių, kurie alergiški šokoladui.",
            3: "Diena 3: Patarimas: Niekada nežaisk slėpynių su depresija; ji visada tave suras.",
            4: "Diena 4: Kodėl jaudintis dėl senėjimo? Bent jau tai geriau nei alternatyva.",
            5: "Diena 5: Jei jautiesi bevertis, prisimink, kad nulūžęs pieštukas taip pat beprasmis.",
            6: "Diena 6: Gyvenimo hack'as: Gali sutaupyti daug laiko, jei prie nieko nesiriši.",
            7: "Diena 7: Ar kada nors pagalvojai, kad kiekvienas tavo įkvėpimas yra vienu mažiau likusiu?",
            8: "Diena 8: Smagus faktas: Vienintelis dalykas, kurį garantuotai gausi iš gyvenimo, yra mokesčiai ir mirtis.",
            9: "Diena 9: Jei jautiesi prislėgtas, prisimink, kad gravitacija visada tave prispaudžia prie žemės.",
            10: "Diena 10: Geros naujienos, tavo gyvenimas nėra filmas; nėra garantijos, kad jis turės laimingą pabaigą.",
            11: "Diena 11: Būk dėkingas už blogas dienas, jos padaro geras dienas rečiau pasitaikančias.",
            12: "Diena 12: Prokrastinacija kaip kreditinė kortelė; labai smagu, kol gauni sąskaitą.",
            13: "Diena 13: Penktadienis 13-oji? Tiesiog dar viena diena dideliame dalykų plane.",
            14: "Diena 14: Meilė? Puiku, kol prisimeni, kad širdies skausmas jau už kampo.",
            15: "Diena 15: Nesijaudink dėl prarandamų plaukų; tu įgyji išminties... arba plikimą.",
            16: "Diena 16: Kodėl jaudintis dėl blogos dienos, kai visada yra rytoj, kad galėtum viską sugadinti?",
            17: "Diena 17: Sveikinimai, išgyvenai dar vieną dieną egzistencinėje krizėje, vadinamoje gyvenimu.",
            18: "Diena 18: Prisimink, vienintelis dalykas, garantuotas gyvenime, yra netikrumas.",
            19: "Diena 19: Dietos patarimas: Gali numesti svorio pamiršęs valgyti... arba dėl streso.",
            20: "Diena 20: Jei gyvenimas tau duoda citrinų, pasigamink limonadą, tada suvok, kad cukraus neturi.",
            21: "Diena 21: Geriausia dalis apie pasiekimą dugno – nėra kur eiti, tik į šoną.",
            22: "Diena 22: Žinai, kad esi suaugęs, kai 'linksmybė' tampa 'atsakomybe' su kauke.",
            23: "Diena 23: Kiekviena diena artina prie pabaigos, bet argi tai ne jaudina?",
            24: "Diena 24: Linksmų Kalėdų! Prisimink, Kalėdų senelio elfai yra tik nepakankamai apmokami darbininkai žaislų prakaito fabrike."
        },
    },
    reducers: {
        openDay: (state, action) => {
            if (!state.openedDays.includes(action.payload)) {
                state.openedDays.push(action.payload);
            }
        },
    },
});

export const { openDay } = calendarSlice.actions;
export const selectOpenedDays = (state) => state.calendar.openedDays;
export const selectAdviceByDay = (state, day) => state.calendar.advices[day] || 'Šiai dienai patarimų nėra';

export default calendarSlice.reducer;