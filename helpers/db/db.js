import * as SQLite from 'expo-sqlite';

const db= SQLite.openDatabase('cadastro.db');


export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
                CREATE TABLE IF NOT EXISTS registrarEquip
                    (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, dias INT NOT NULL, potencia INT NOT NULL, tempo FLOAT NOT NULL, 
                        kwh FLOAT NOT NULL)
            ` ,
            [],
            () =>{
                resolve();
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;
}

export const insertRegistrar= (name,dias, potencia, tempo, kwh)=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
               INSERT INTO registrarEquip (name, dias, potencia, tempo, kwh) VALUES (?,?,?,?,?)
            ` ,
            [name, dias, potencia,tempo,kwh],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}
export const listRegistrados= ()=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
               SELECT * FROM registrarEquip
            ` ,
            [],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}
export const listValorTotal= ()=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
            SELECT
            name,
            id,
            dias,
            potencia,
            tempo,
            kwh,
            printf("%.2f",potencia * tempo * kwh / 1000)
             AS VALORDIAS,
             printf("%.2f",potencia * dias * tempo * kwh / 1000)
            AS MESDIAS,
            printf("%.2f",potencia* tempo * 30 * kwh  / 1000)
             AS MENSAL
            FROM registrarEquip
            ` ,
            [],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}
export const DeleteEquipamento= (id)=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
            DELETE FROM  registrarEquip where id=?
            ` ,
            [id],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}

export const Delete= ()=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
            DELETE FROM  registrarEquip;

            
            ` ,
            [],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}
export const Update= ( name, dias, potencia,tempo,kwh, id )=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
            UPDATE registrarEquip
             SET
             name = ? ,
             dias = ? ,
             potencia = ? ,
             tempo = ? ,
             kwh = ? 
             
             WHERE id = ?;

            ` ,
            [name, dias, potencia,tempo,kwh,id ],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}
export const Drop= ()=> {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
            `
           DROP TABLE registrarEquip;

            
            ` ,
            [],
            (_,result) =>{
                resolve(result);
            },
            (_, err) => {
                reject(err);
            }
        )
     })
    })
    return promise;

}




