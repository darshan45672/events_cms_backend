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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateFeedbackArgs } from "./CreateFeedbackArgs";
import { UpdateFeedbackArgs } from "./UpdateFeedbackArgs";
import { DeleteFeedbackArgs } from "./DeleteFeedbackArgs";
import { FeedbackFindManyArgs } from "./FeedbackFindManyArgs";
import { FeedbackFindUniqueArgs } from "./FeedbackFindUniqueArgs";
import { Feedback } from "./Feedback";
import { Event } from "../../event/base/Event";
import { FeedbackService } from "../feedback.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Feedback)
export class FeedbackResolverBase {
  constructor(
    protected readonly service: FeedbackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async _feedbacksMeta(
    @graphql.Args() args: FeedbackFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Feedback])
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async feedbacks(
    @graphql.Args() args: FeedbackFindManyArgs
  ): Promise<Feedback[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Feedback, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "own",
  })
  async feedback(
    @graphql.Args() args: FeedbackFindUniqueArgs
  ): Promise<Feedback | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Feedback)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "create",
    possession: "any",
  })
  async createFeedback(
    @graphql.Args() args: CreateFeedbackArgs
  ): Promise<Feedback> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        event: args.data.event
          ? {
              connect: args.data.event,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Feedback)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "update",
    possession: "any",
  })
  async updateFeedback(
    @graphql.Args() args: UpdateFeedbackArgs
  ): Promise<Feedback | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          event: args.data.event
            ? {
                connect: args.data.event,
              }
            : undefined,
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

  @graphql.Mutation(() => Feedback)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "delete",
    possession: "any",
  })
  async deleteFeedback(
    @graphql.Args() args: DeleteFeedbackArgs
  ): Promise<Feedback | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Event, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async event(@graphql.Parent() parent: Feedback): Promise<Event | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
