import { readFile, writeFile } from 'fs/promises';

type Message = {
  id: string;
  message: string;
};

type MessageMap = Record<string, Message>;

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as MessageMap;

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as MessageMap;

    return messages;
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as MessageMap;

    const id = Math.random().toString(36).substring(2, 5);
    messages[id] = {
      id,
      message,
    };

    await writeFile('messages.json', JSON.stringify(messages));

    return id;
  }
}
