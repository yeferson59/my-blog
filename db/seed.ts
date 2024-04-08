import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
		{
			id: 1,
			content: "hahdope"
		},
		{
			id: 2,
			content: "hola"
		}
	])
}
