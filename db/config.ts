import { column, defineDb, defineTable} from 'astro:db';

const Comment = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    content: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Comment }
});
