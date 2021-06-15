import { Resolver, Query, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Task')
export class Task {
  @Field(() => String, { description: 'task title' })
  title: string;
  @Field(() => String, { description: 'task description' })
  description: string;
}

@ObjectType('PaginatedTask')
export class PaginatedTask {
  @Field(() => [Task])
  edges: Task[];
  @Field(() => Int)
  total: number;
}

@Resolver(() => Task)
export class TasksResolver {
  @Query(() => PaginatedTask, { name: 'tasks' })
  findAll() {
    return '';
  }
}
