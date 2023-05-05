/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EventService } from "../event.service";
import { Public } from "../../decorators/public.decorator";
import { EventCreateInput } from "./EventCreateInput";
import { EventWhereInput } from "./EventWhereInput";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventUpdateInput } from "./EventUpdateInput";
import { Event } from "./Event";
import { EventRegistrationFindManyArgs } from "../../eventRegistration/base/EventRegistrationFindManyArgs";
import { EventRegistration } from "../../eventRegistration/base/EventRegistration";
import { EventRegistrationWhereUniqueInput } from "../../eventRegistration/base/EventRegistrationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventControllerBase {
  constructor(
    protected readonly service: EventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Event })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: EventCreateInput): Promise<Event> {
    return await this.service.create({
      data: {
        ...data,

        branch: {
          connect: data.branch,
        },

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,
      },
      select: {
        attendanceCode: true,

        branch: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        endDate: true,
        eventType: true,
        id: true,
        img: true,
        registrationEndDate: true,
        startDate: true,
        title: true,
        updatedAt: true,
        venue: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Event] })
  @ApiNestedQuery(EventFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Event[]> {
    const args = plainToClass(EventFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        attendanceCode: true,

        branch: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        endDate: true,
        eventType: true,
        id: true,
        img: true,
        registrationEndDate: true,
        startDate: true,
        title: true,
        updatedAt: true,
        venue: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        attendanceCode: true,

        branch: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        endDate: true,
        eventType: true,
        id: true,
        img: true,
        registrationEndDate: true,
        startDate: true,
        title: true,
        updatedAt: true,
        venue: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() data: EventUpdateInput
  ): Promise<Event | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          branch: {
            connect: data.branch,
          },

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,
        },
        select: {
          attendanceCode: true,

          branch: {
            select: {
              id: true,
            },
          },

          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          endDate: true,
          eventType: true,
          id: true,
          img: true,
          registrationEndDate: true,
          startDate: true,
          title: true,
          updatedAt: true,
          venue: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          attendanceCode: true,

          branch: {
            select: {
              id: true,
            },
          },

          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          endDate: true,
          eventType: true,
          id: true,
          img: true,
          registrationEndDate: true,
          startDate: true,
          title: true,
          updatedAt: true,
          venue: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Get("/:id/eventRegistrations")
  @ApiNestedQuery(EventRegistrationFindManyArgs)
  async findManyEventRegistrations(
    @common.Req() request: Request,
    @common.Param() params: EventWhereUniqueInput
  ): Promise<EventRegistration[]> {
    const query = plainToClass(EventRegistrationFindManyArgs, request.query);
    const results = await this.service.findEventRegistrations(params.id, {
      ...query,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        feedback: true,
        id: true,
        isAttended: true,
        teamMembers: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @Public()
  @common.Post("/:id/eventRegistrations")
  async connectEventRegistrations(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: EventRegistrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventRegistrations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Patch("/:id/eventRegistrations")
  async updateEventRegistrations(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: EventRegistrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventRegistrations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Delete("/:id/eventRegistrations")
  async disconnectEventRegistrations(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: EventRegistrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventRegistrations: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
