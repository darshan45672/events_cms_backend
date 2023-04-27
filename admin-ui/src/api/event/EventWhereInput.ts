import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventRegistrationListRelationFilter } from "../eventRegistration/EventRegistrationListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  branch?: BranchWhereUniqueInput;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  eventRegistrations?: EventRegistrationListRelationFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  img?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  venue?: StringNullableFilter;
};
