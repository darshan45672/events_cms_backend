/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateEventRegistrationArgs } from "./CreateEventRegistrationArgs";
import { UpdateEventRegistrationArgs } from "./UpdateEventRegistrationArgs";
import { DeleteEventRegistrationArgs } from "./DeleteEventRegistrationArgs";
import { EventRegistrationFindManyArgs } from "./EventRegistrationFindManyArgs";
import { EventRegistrationFindUniqueArgs } from "./EventRegistrationFindUniqueArgs";
import { EventRegistration } from "./EventRegistration";
import { Event } from "../../event/base/Event";
import { User } from "../../user/base/User";
import { EventRegistrationService } from "../eventRegistration.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventRegistration)
export class EventRegistrationResolverBase {
  constructor(
    protected readonly service: EventRegistrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _eventRegistrationsMeta(
    @graphql.Args() args: EventRegistrationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [EventRegistration])
  async eventRegistrations(
    @graphql.Args() args: EventRegistrationFindManyArgs
  ): Promise<EventRegistration[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => EventRegistration, { nullable: true })
  async eventRegistration(
    @graphql.Args() args: EventRegistrationFindUniqueArgs
  ): Promise<EventRegistration | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EventRegistration)
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "create",
    possession: "any",
  })
  async createEventRegistration(
    @graphql.Args() args: CreateEventRegistrationArgs
  ): Promise<EventRegistration> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        event: {
          connect: args.data.event,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EventRegistration)
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "update",
    possession: "any",
  })
  async updateEventRegistration(
    @graphql.Args() args: UpdateEventRegistrationArgs
  ): Promise<EventRegistration | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          event: {
            connect: args.data.event,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EventRegistration)
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "delete",
    possession: "any",
  })
  async deleteEventRegistration(
    @graphql.Args() args: DeleteEventRegistrationArgs
  ): Promise<EventRegistration | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => Event, { nullable: true })
  async event(
    @graphql.Parent() parent: EventRegistration
  ): Promise<Event | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, { nullable: true })
  async user(
    @graphql.Parent() parent: EventRegistration
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
