import { TaskCardType } from './../models/TaskCardList';
import Dexie, { Table } from 'dexie';

class DB extends Dexie {
  taskCardList!: Table<TaskCardType>;

  constructor() {
    super('localDB');
    this.version(1).stores({
      taskCardList: '++cardId, taskTitle, taskList',
    });
  }
}

export const localDB = new DB();

/**
 * データベースを削除する
 */
export const DeleteDatabase = () => {
  (async () => {
    await localDB.delete();
    window.location.reload();
  })();
};

/**
 * 全てのテーブルを空にする
 */
export const clearDatabase = () => {
  localDB.transaction('rw', localDB.tables, async () => {
    await Promise.all(localDB.tables.map((table) => table.clear()));
    window.location.reload();
  });
};

/**
 * taskCardListテーブルを空にする
 */
export const clearTaskCardList = () => {
  localDB.transaction('rw', localDB.taskCardList, async () => {
    await localDB.taskCardList.clear();
    window.location.reload();
  });
};

/**
 * (非同期)taskCardListを取得する
 */
export const getTaskCardList = () => localDB.taskCardList.toArray();

export const initialDatabase = async () => {
  try {
    await localDB.transaction('rw', localDB.taskCardList, async () => {
      const resultTaskCardList = await localDB.taskCardList.toArray();

      if (resultTaskCardList.length === 0)
        await localDB.taskCardList.add({ taskTitle: 'Today', taskList: ['test'] });
    });
  } catch (error) {
    console.log(error);
  }
};

export const putTaskCard = (taskCard: TaskCardType) => localDB.taskCardList.put(taskCard);
