export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-cemetery-memorial-park-manager-ai-j615h1-exact-ai": [
    {
      "name": "achievements",
      "label": "Achievements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "additional_info",
      "label": "Additional Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age_group",
      "label": "Age Group",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "biography",
      "label": "Biography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "birth_date",
      "label": "Birth Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "birth_year",
      "label": "Birth Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_conditions",
      "label": "Current Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dates",
      "label": "Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "death_date",
      "label": "Death Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "death_year",
      "label": "Death Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deceased_name",
      "label": "Deceased Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_members",
      "label": "Family Members",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_message",
      "label": "Family Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "interests",
      "label": "Interests",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "known_relatives",
      "label": "Known Relatives",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "person_name",
      "label": "Person Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personality",
      "label": "Personality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photos_description",
      "label": "Photos Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "relationship",
      "label": "Relationship",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "specific_needs",
      "label": "Specific Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_since_loss",
      "label": "Time Since Loss",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "upcoming_events",
      "label": "Upcoming Events",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-ai-new-1l6olc-exact-ai": [
    {
      "name": "annual_yield_pct",
      "label": "Annual Yield Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "attendee_count",
      "label": "Attendee Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_plots",
      "label": "Available Plots",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "cemetery_history",
      "label": "Cemetery History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "current_obligations",
      "label": "Current Obligations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "design_preferences",
      "label": "Design Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "documents_text",
      "label": "Documents Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "endowment_balance",
      "label": "Endowment Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "endpoint",
      "label": "Endpoint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "event_themes",
      "label": "Event Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "existing_records",
      "label": "Existing Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "family_records",
      "label": "Family Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "family_requirements",
      "label": "Family Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "flag_reason",
      "label": "Flag Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "flagged",
      "label": "Flagged",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "inflation_pct",
      "label": "Inflation Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "materials_available",
      "label": "Materials Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "plot_locations",
      "label": "Plot Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "projection_years",
      "label": "Projection Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "request_data",
      "label": "Request Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "suggested_dates",
      "label": "Suggested Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surname",
      "label": "Surname",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "upcoming_anniversaries",
      "label": "Upcoming Anniversaries",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-gap-no-ai-grief-support-chatbot-for-families-1x5rp6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Grief Support Chatbot For Families source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_grief_support_chatbot_for_families.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-gap-no-ai-memorial-video-generation-1moexg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Memorial Video Generation source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_memorial_video_generation.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-gap-no-ai-obituary-auto-generation-from-intake-form-w0yge0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Obituary Auto Generation From Intake Form source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_obituary_auto_generation_from_intake_form.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-gap-no-ai-plot-grave-availability-optimization-1ts2y9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Plot Grave Availability Optimization source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_plot_grave_availability_optimization.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-gap-no-ai-restoration-estimate-from-headstone-photos-1fsgk9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Restoration Estimate From Headstone Photos source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_restoration_estimate_from_headstone_photos.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-ai-feature-page-rultnt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIFeaturePage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-ai-history-9gbft8-exact-ai": [
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    },
    {
      "name": "total_pages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-agentic-memorial-concierge-that-drafts-obituary-pl-page-n6405n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Memorial Concierge That Drafts Obituary Pl Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AgenticMemorialConciergeThatDraftsObituaryPlPage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-no-ai-grief-support-chatbot-for-families-page-1uutli-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Grief Support Chatbot For Families Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiGriefSupportChatbotForFamiliesPage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-no-ai-memorial-video-generation-page-axleon-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Memorial Video Generation Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiMemorialVideoGenerationPage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-no-ai-obituary-auto-generation-from-intake-form-page-9k6u7a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Obituary Auto Generation From Intake Form Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiObituaryAutoGenerationFromIntakeFormPage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-no-ai-plot-grave-availability-optimization-page-z0s3t8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Plot Grave Availability Optimization Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiPlotGraveAvailabilityOptimizationPage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-no-ai-restoration-estimate-from-headstone-photos-page-1pg0bs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Restoration Estimate From Headstone Photos Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiRestorationEstimateFromHeadstonePhotosPage.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-source-workflow": [
    {
      "name": "achievements",
      "label": "Achievements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "additional_info",
      "label": "Additional Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age_group",
      "label": "Age Group",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "biography",
      "label": "Biography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "birth_date",
      "label": "Birth Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "birth_year",
      "label": "Birth Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_conditions",
      "label": "Current Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dates",
      "label": "Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "death_date",
      "label": "Death Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "death_year",
      "label": "Death Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deceased_name",
      "label": "Deceased Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_members",
      "label": "Family Members",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_message",
      "label": "Family Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "interests",
      "label": "Interests",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "known_relatives",
      "label": "Known Relatives",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "person_name",
      "label": "Person Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personality",
      "label": "Personality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photos_description",
      "label": "Photos Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "relationship",
      "label": "Relationship",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "specific_needs",
      "label": "Specific Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_since_loss",
      "label": "Time Since Loss",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "upcoming_events",
      "label": "Upcoming Events",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "annual_yield_pct",
      "label": "Annual Yield Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "attendee_count",
      "label": "Attendee Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_plots",
      "label": "Available Plots",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "cemetery_history",
      "label": "Cemetery History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "current_obligations",
      "label": "Current Obligations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "design_preferences",
      "label": "Design Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "documents_text",
      "label": "Documents Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "endowment_balance",
      "label": "Endowment Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "endpoint",
      "label": "Endpoint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "event_themes",
      "label": "Event Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "existing_records",
      "label": "Existing Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "family_records",
      "label": "Family Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "family_requirements",
      "label": "Family Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "flag_reason",
      "label": "Flag Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "flagged",
      "label": "Flagged",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "inflation_pct",
      "label": "Inflation Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "materials_available",
      "label": "Materials Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "plot_locations",
      "label": "Plot Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "projection_years",
      "label": "Projection Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "request_data",
      "label": "Request Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "suggested_dates",
      "label": "Suggested Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surname",
      "label": "Surname",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "upcoming_anniversaries",
      "label": "Upcoming Anniversaries",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Grief Support Chatbot For Families source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_grief_support_chatbot_for_families.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    },
    {
      "name": "total_pages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    }
  ],
  "ai-cemetery-memorial-park-manager-ai-tools": [
    {
      "name": "achievements",
      "label": "Achievements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "additional_info",
      "label": "Additional Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age_group",
      "label": "Age Group",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "biography",
      "label": "Biography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "birth_date",
      "label": "Birth Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "birth_year",
      "label": "Birth Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_conditions",
      "label": "Current Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dates",
      "label": "Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "death_date",
      "label": "Death Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "death_year",
      "label": "Death Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deceased_name",
      "label": "Deceased Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_members",
      "label": "Family Members",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "family_message",
      "label": "Family Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "interests",
      "label": "Interests",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "known_relatives",
      "label": "Known Relatives",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "person_name",
      "label": "Person Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personality",
      "label": "Personality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photos_description",
      "label": "Photos Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "relationship",
      "label": "Relationship",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "specific_needs",
      "label": "Specific Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_since_loss",
      "label": "Time Since Loss",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "upcoming_events",
      "label": "Upcoming Events",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "annual_yield_pct",
      "label": "Annual Yield Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "attendee_count",
      "label": "Attendee Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_plots",
      "label": "Available Plots",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "cemetery_history",
      "label": "Cemetery History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "current_obligations",
      "label": "Current Obligations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "design_preferences",
      "label": "Design Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "documents_text",
      "label": "Documents Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "endowment_balance",
      "label": "Endowment Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "endpoint",
      "label": "Endpoint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "event_themes",
      "label": "Event Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "existing_records",
      "label": "Existing Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "family_records",
      "label": "Family Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "family_requirements",
      "label": "Family Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "flag_reason",
      "label": "Flag Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "flagged",
      "label": "Flagged",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "inflation_pct",
      "label": "Inflation Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "materials_available",
      "label": "Materials Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "plot_locations",
      "label": "Plot Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "projection_years",
      "label": "Projection Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "request_data",
      "label": "Request Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "suggested_dates",
      "label": "Suggested Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surname",
      "label": "Surname",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "upcoming_anniversaries",
      "label": "Upcoming Anniversaries",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Grief Support Chatbot For Families source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_grief_support_chatbot_for_families.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    },
    {
      "name": "total_pages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    }
  ],
  "ai-chatbot-builder-ai-backlog-v6gumm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Backlog source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklog.jsx"
    }
  ],
  "ai-chatbot-builder-ai-chat-udusm7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.jsx"
    }
  ],
  "ai-chatbot-builder-no-ai-conversation-quality-scoring-page-ojw4la-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Conversation Quality Scoring Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiConversationQualityScoringPage.jsx"
    }
  ],
  "ai-chatbot-builder-no-ai-multi-bot-orchestration-router-agent-page-nmhmh6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Multi Bot Orchestration Router Agent Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiMultiBotOrchestrationRouterAgentPage.jsx"
    }
  ],
  "ai-chatbot-builder-no-ai-self-improving-flow-optimizer-based-on-outco-page-1swziz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Self Improving Flow Optimizer Based On Outco Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiSelfImprovingFlowOptimizerBasedOnOutcoPage.jsx"
    }
  ],
  "ai-chatbot-builder-no-ai-voice-ivr-channel-support-page-uygn7o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Voice Ivr Channel Support Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiVoiceIvrChannelSupportPage.jsx"
    }
  ],
  "ai-chatbot-builder-no-live-chat-takeover-ui-for-human-agents-channels-page-1oan5r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No Live Chat Takeover Ui For Human Agents Channels Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoLiveChatTakeoverUiForHumanAgentsChannelsPage.jsx"
    }
  ],
  "ai-chatbot-builder-omnichannel-routing-agent-escalating-across-sms-em-page-1rugha-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Omnichannel Routing Agent Escalating Across Sms Em Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/OmnichannelRoutingAgentEscalatingAcrossSmsEmPage.jsx"
    }
  ],
  "ai-chatbot-builder-only7-mounted-ai-endpoints-for33-routes-feature-page-15ykj1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Only7 Mounted AI Endpoints For33 Routes Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Only7MountedAiEndpointsFor33RoutesFeaturePage.jsx"
    }
  ],
  "ai-chatbot-builder-sentiment-triggered-escalation-to-human-agents-in-page-trk1qw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sentiment Triggered Escalation To Human Agents In Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/SentimentTriggeredEscalationToHumanAgentsInPage.jsx"
    }
  ],
  "ai-chatbot-builder-training-data-c4aruh-exact-ai": [
    {
      "name": "chatbot_id",
      "label": "Chatbot Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "expected_intent",
      "label": "Expected Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "input_text",
      "label": "Input Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "verified",
      "label": "Verified",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    }
  ],
  "ai-chatbot-builder-ai-5cuwes-exact-ai": [
    {
      "name": "chatbot_id",
      "label": "Chatbot Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_history",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "count",
      "label": "Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_response",
      "label": "Current Response",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-chatbot-builder-ai-backlog-1bvczz-exact-ai": [
    {
      "name": "conversation_history",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "logs",
      "label": "Logs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "max_intents",
      "label": "Max Intents",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "threshold",
      "label": "Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "ai-chatbot-builder-ai-new-7q6oy0-exact-ai": [
    {
      "name": "conversation",
      "label": "Conversation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "conversation_history",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "conversation_logs",
      "label": "Conversation Logs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "kb_articles",
      "label": "Kb Articles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "response_text",
      "label": "Response Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "variables_config",
      "label": "Variables Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-chatbot-builder-gap-no-ai-conversation-quality-scoring-copg1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Conversation Quality Scoring source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_conversation_quality_scoring.js"
    }
  ],
  "ai-chatbot-builder-gap-no-ai-multi-bot-orchestration-router-agent-bybj1h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Multi Bot Orchestration Router Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_multi_bot_orchestration_router_agent.js"
    }
  ],
  "ai-chatbot-builder-gap-no-ai-self-improving-flow-optimizer-based-on-outco-1ifkei-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Self Improving Flow Optimizer Based On Outco source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_self_improving_flow_optimizer_based_on_outco.js"
    }
  ],
  "ai-chatbot-builder-gap-no-ai-voice-ivr-channel-support-agicl0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Voice Ivr Channel Support source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_voice_ivr_channel_support.js"
    }
  ],
  "ai-chatbot-builder-gap-no-live-chat-takeover-ui-for-human-agents-channels-3lmmaz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Live Chat Takeover Ui For Human Agents Channels source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_live_chat_takeover_ui_for_human_agents_channels.js"
    }
  ],
  "ai-chatbot-builder-gap-only-7-mounted-ai-endpoints-for-33-routes-feature-rsaa48-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Only 7 Mounted AI Endpoints For 33 Routes Feature source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_only_7_mounted_ai_endpoints_for_33_routes_feature_.js"
    }
  ],
  "ai-chatbot-builder-training-data-1989fl-exact-ai": [
    {
      "name": "chatbot_id",
      "label": "Chatbot Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    },
    {
      "name": "expected_entities",
      "label": "Expected Entities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    },
    {
      "name": "expected_intent",
      "label": "Expected Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    },
    {
      "name": "input_text",
      "label": "Input Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    },
    {
      "name": "verified",
      "label": "Verified",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    }
  ],
  "ai-chatbot-builder-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Backlog source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklog.jsx"
    },
    {
      "name": "chatbot_id",
      "label": "Chatbot Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "expected_intent",
      "label": "Expected Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "input_text",
      "label": "Input Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "verified",
      "label": "Verified",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "conversation_history",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "count",
      "label": "Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_response",
      "label": "Current Response",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "logs",
      "label": "Logs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "max_intents",
      "label": "Max Intents",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "threshold",
      "label": "Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "conversation",
      "label": "Conversation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "conversation_logs",
      "label": "Conversation Logs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "kb_articles",
      "label": "Kb Articles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "response_text",
      "label": "Response Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "variables_config",
      "label": "Variables Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "expected_entities",
      "label": "Expected Entities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    }
  ],
  "ai-chatbot-builder-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Backlog source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklog.jsx"
    },
    {
      "name": "chatbot_id",
      "label": "Chatbot Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "expected_intent",
      "label": "Expected Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "input_text",
      "label": "Input Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "verified",
      "label": "Verified",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingData.jsx"
    },
    {
      "name": "conversation_history",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "count",
      "label": "Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_response",
      "label": "Current Response",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "logs",
      "label": "Logs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "max_intents",
      "label": "Max Intents",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "threshold",
      "label": "Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "conversation",
      "label": "Conversation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "conversation_logs",
      "label": "Conversation Logs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "kb_articles",
      "label": "Kb Articles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "response_text",
      "label": "Response Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "variables_config",
      "label": "Variables Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "expected_entities",
      "label": "Expected Entities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingData.js"
    }
  ],
  "ai-code-interpreter-ai-advanced-page-f2qrqs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedPage.js"
    }
  ],
  "ai-code-interpreter-ai-chat-page-96sg50-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChatPage.js"
    }
  ],
  "ai-code-interpreter-agentic-data-analyst-that-plans-executes-and-repor-page-nnug6h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Data Analyst That Plans Executes And Repor Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticDataAnalystThatPlansExecutesAndReporPage.js"
    }
  ],
  "ai-code-interpreter-no-ai-agentic-notebook-write-run-fix-loop-page-3orc8u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Agentic Notebook Write Run Fix Loop Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiAgenticNotebookWriteRunFixLoopPage.js"
    }
  ],
  "ai-code-interpreter-no-ai-auto-eda-dataset-profiler-page-wwt2vj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Auto Eda Dataset Profiler Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiAutoEdaDatasetProfilerPage.js"
    }
  ],
  "ai-code-interpreter-no-ai-chart-recommendation-from-data-shape-page-1nvfdo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Chart Recommendation From Data Shape Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiChartRecommendationFromDataShapePage.js"
    }
  ],
  "ai-code-interpreter-no-ai-privacy-pii-scanner-over-datasets-page-1uqn4b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Privacy Pii Scanner Over Datasets Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiPrivacyPiiScannerOverDatasetsPage.js"
    }
  ],
  "ai-code-interpreter-notification-routes-exist-but-no-email-slack-deliv-page-kvexng-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Notification Routes Exist But No Email Slack Deliv Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NotificationRoutesExistButNoEmailSlackDelivPage.js"
    }
  ],
  "ai-code-interpreter-ai-5cuwes-exact-ai": [
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_description",
      "label": "Data Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "detail_level",
      "label": "Detail Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "error_message",
      "label": "Error Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "from_language",
      "label": "From Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "review_type",
      "label": "Review Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "to_language",
      "label": "To Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-code-interpreter-ai-advanced-98178q-exact-ai": [
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "current_code",
      "label": "Current Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "current_docs = ''",
      "label": "Current Docs = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "file_path = ''",
      "label": "File Path = ''",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "language = 'python'",
      "label": "Language = 'Python'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "language = 'unknown'",
      "label": "Language = 'Unknown'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "min_similarity = 0.6",
      "label": "Min Similarity = 0.6",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "previous_code",
      "label": "Previous Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "snippet_ids",
      "label": "Snippet Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "stdin = ''",
      "label": "Stdin = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "target_input_size",
      "label": "Target Input Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    }
  ],
  "ai-code-interpreter-ai-new-7q6oy0-exact-ai": [
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "error_message",
      "label": "Error Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-code-interpreter-data-analyst-agent-1rn7t5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Data Analyst Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/dataAnalystAgent.js"
    }
  ],
  "ai-code-interpreter-gap-no-ai-agentic-notebook-write-run-fix-loop-1ggp5r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Agentic Notebook Write Run Fix Loop source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_agentic_notebook_write_run_fix_loop.js"
    }
  ],
  "ai-code-interpreter-gap-no-ai-auto-eda-dataset-profiler-1yg4lt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Auto Eda Dataset Profiler source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_auto_eda_dataset_profiler.js"
    }
  ],
  "ai-code-interpreter-gap-no-ai-chart-recommendation-from-data-shape-1ij7jo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Chart Recommendation From Data Shape source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_chart_recommendation_from_data_shape.js"
    }
  ],
  "ai-code-interpreter-gap-no-ai-privacy-pii-scanner-over-datasets-7aegjn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Privacy Pii Scanner Over Datasets source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_privacy_pii_scanner_over_datasets.js"
    }
  ],
  "ai-code-interpreter-gap-notification-routes-exist-but-no-email-slack-deliv-1c0924-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Notification Routes Exist But No Email Slack Deliv source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_notification_routes_exist_but_no_email_slack_deliv.js"
    }
  ],
  "ai-code-interpreter-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedPage.js"
    },
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_description",
      "label": "Data Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "detail_level",
      "label": "Detail Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "error_message",
      "label": "Error Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "from_language",
      "label": "From Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "review_type",
      "label": "Review Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "to_language",
      "label": "To Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_code",
      "label": "Current Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "current_docs = ''",
      "label": "Current Docs = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "file_path = ''",
      "label": "File Path = ''",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "language = 'python'",
      "label": "Language = 'Python'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "language = 'unknown'",
      "label": "Language = 'Unknown'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "min_similarity = 0.6",
      "label": "Min Similarity = 0.6",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "previous_code",
      "label": "Previous Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "snippet_ids",
      "label": "Snippet Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "stdin = ''",
      "label": "Stdin = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "target_input_size",
      "label": "Target Input Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-code-interpreter-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedPage.js"
    },
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_description",
      "label": "Data Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "detail_level",
      "label": "Detail Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "error_message",
      "label": "Error Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "from_language",
      "label": "From Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "review_type",
      "label": "Review Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "to_language",
      "label": "To Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_code",
      "label": "Current Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "current_docs = ''",
      "label": "Current Docs = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "file_path = ''",
      "label": "File Path = ''",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "language = 'python'",
      "label": "Language = 'Python'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "language = 'unknown'",
      "label": "Language = 'Unknown'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "min_similarity = 0.6",
      "label": "Min Similarity = 0.6",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "previous_code",
      "label": "Previous Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "snippet_ids",
      "label": "Snippet Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "stdin = ''",
      "label": "Stdin = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "target_input_size",
      "label": "Target Input Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-code-review-documentation-code-explainer-ty48ms-exact-ai": [
    {
      "name": "code_snippet",
      "label": "Code Snippet",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste DevOps code to explain (YAML, Shell, Terraform, etc.)...",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "language",
      "label": "Language/Format",
      "type": "select",
      "defaultValue": "yaml",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Kubernetes Deployment Config",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Brief description of the code",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    }
  ],
  "ai-code-review-documentation-critical0-mounted-chat-style-ai-endpoints-despite-page-2gc806-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Critical0 Mounted Chat Style AI Endpoints Despite Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Critical0MountedChatStyleAiEndpointsDespitePage.jsx"
    }
  ],
  "ai-code-review-documentation-critical-ai-code-review-agent-analyzing-prs-for-bu-page-r9icwb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Critical AI Code Review Agent Analyzing Prs For Bu Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CriticalAiCodeReviewAgentAnalyzingPrsForBuPage.jsx"
    }
  ],
  "ai-code-review-documentation-no-ai-documentation-generator-from-source-page-u7lrw9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Documentation Generator From Source Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiDocumentationGeneratorFromSourcePage.jsx"
    }
  ],
  "ai-code-review-documentation-no-ai-pr-summary-or-change-impact-analyzer-wired-t-page-1iap0g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Pr Summary Or Change Impact Analyzer Wired T Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiPrSummaryOrChangeImpactAnalyzerWiredTPage.jsx"
    }
  ],
  "ai-code-review-documentation-no-ai-test-generation-actually-wired-page-1d4k2i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Test Generation Actually Wired Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiTestGenerationActuallyWiredPage.jsx"
    }
  ],
  "ai-code-review-documentation-no-ai-vulnerability-secret-scan-integrated-with-co-page-1cl3yy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Vulnerability Secret Scan Integrated With Co Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiVulnerabilitySecretScanIntegratedWithCoPage.jsx"
    }
  ],
  "ai-code-review-documentation-no-ide-plugin-vs-code-jetbrains-page-b36wcs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No Ide Plugin Vs Code Jetbrains Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoIdePluginVsCodeJetbrainsPage.jsx"
    }
  ],
  "ai-code-review-documentation-notification-routes-exist-but-no-slack-email-deliv-page-1jsdip-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Notification Routes Exist But No Slack Email Deliv Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NotificationRoutesExistButNoSlackEmailDelivPage.jsx"
    }
  ],
  "ai-code-review-documentation-verify-email-1s7wix-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/VerifyEmail.jsx"
    }
  ],
  "ai-code-review-documentation-ai-code-reviewer-6f9d2x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Code Reviewer source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCodeReviewer.js"
    }
  ],
  "ai-code-review-documentation-code-explainer-xpvpho-exact-ai": [
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "code_snippet",
      "label": "Code Snippet",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    }
  ],
  "ai-code-review-documentation-gap-critical-0-mounted-chat-style-ai-endpoints-despite-ckg8sb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Critical 0 Mounted Chat Style AI Endpoints Despite source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_critical_0_mounted_chat_style_ai_endpoints_despite.js"
    }
  ],
  "ai-code-review-documentation-gap-no-ai-documentation-generator-from-source-1xwxa1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Documentation Generator From Source source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_ai_documentation_generator_from_source.js"
    }
  ],
  "ai-code-review-documentation-gap-no-ai-pr-summary-or-change-impact-analyzer-wired-t-13pdug-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Pr Summary Or Change Impact Analyzer Wired T source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_ai_pr_summary_or_change_impact_analyzer_wired_t.js"
    }
  ],
  "ai-code-review-documentation-gap-no-ai-test-generation-actually-wired-1u30u8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Test Generation Actually Wired source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_ai_test_generation_actually_wired.js"
    }
  ],
  "ai-code-review-documentation-gap-no-ai-vulnerability-secret-scan-integrated-with-co-1dpxrd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Vulnerability Secret Scan Integrated With Co source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_ai_vulnerability_secret_scan_integrated_with_co.js"
    }
  ],
  "ai-code-review-documentation-gap-no-ide-plugin-vs-code-jetbrains-1lj3l9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Ide Plugin Vs Code Jetbrains source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_ide_plugin_vs_code_jetbrains.js"
    }
  ],
  "ai-code-review-documentation-gap-notification-routes-exist-but-no-slack-email-deliv-f0bcp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Notification Routes Exist But No Slack Email Deliv source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_notification_routes_exist_but_no_slack_email_deliv.js"
    }
  ],
  "ai-code-review-documentation-source-workflow": [
    {
      "name": "code_snippet",
      "label": "Code Snippet",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste DevOps code to explain (YAML, Shell, Terraform, etc.)...",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "language",
      "label": "Language/Format",
      "type": "select",
      "defaultValue": "yaml",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Kubernetes Deployment Config",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Brief description of the code",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Critical0 Mounted Chat Style AI Endpoints Despite Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Critical0MountedChatStyleAiEndpointsDespitePage.jsx"
    },
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    }
  ],
  "ai-code-review-documentation-ai-tools": [
    {
      "name": "code_snippet",
      "label": "Code Snippet",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste DevOps code to explain (YAML, Shell, Terraform, etc.)...",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "language",
      "label": "Language/Format",
      "type": "select",
      "defaultValue": "yaml",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Kubernetes Deployment Config",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Brief description of the code",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CodeExplainer.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Critical0 Mounted Chat Style AI Endpoints Despite Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Critical0MountedChatStyleAiEndpointsDespitePage.jsx"
    },
    {
      "name": "code",
      "label": "Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/codeExplainer.js"
    }
  ],
  "aidao-governance-assistant-ai-feature-page-kbvida-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturePage.js"
    }
  ],
  "aidao-governance-assistant-ai-new-tools-page-1xr7yw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI New Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AINewToolsPage.js"
    }
  ],
  "aidao-governance-assistant-detail-view-1nafny-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Detail View source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DetailView.js"
    }
  ],
  "aidao-governance-assistant-gap-daos-events-lack-ai-endpoints-2eo4u4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Daos Events Lack AI Endpoints source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapDaosEventsLackAiEndpoints.js"
    }
  ],
  "aidao-governance-assistant-gap-no-blockchain-integration-ethereum-polygon-for-on-chain-prop-1jpgxm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Blockchain Integration Ethereum Polygon For On Chain Prop source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoBlockchainIntegrationEthereumPolygonForOnChainProp.js"
    }
  ],
  "aidao-governance-assistant-gap-treasury-lacks-ai-scenario-modeling-endpoint-despite-treasur-d0dmuw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Treasury Lacks AI Scenario Modeling Endpoint Despite Treasur source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapTreasuryLacksAiScenarioModelingEndpointDespiteTreasur.js"
    }
  ],
  "aidao-governance-assistant-ai-5cuwes-exact-ai": [
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "proposal_id",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "aidao-governance-assistant-ai-new-7q6oy0-exact-ai": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_id",
      "label": "Dao Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_ids",
      "label": "Dao Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_name",
      "label": "Dao Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_id",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_text",
      "label": "Proposal Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_type",
      "label": "Proposal Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "sensitivity",
      "label": "Sensitivity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "target_risk",
      "label": "Target Risk",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "aidao-governance-assistant-gap-daos-events-lack-ai-endpoints-13jrg3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Daos Events Lack AI Endpoints source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_daos_events_lack_ai_endpoints.js"
    }
  ],
  "aidao-governance-assistant-gap-no-blockchain-integration-ethereum-polygon-for-on-chain-prop-aq4xcr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Blockchain Integration Ethereum Polygon For On Chain Prop source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_blockchain_integration_ethereum_polygon_for_on_chain_prop.js"
    }
  ],
  "aidao-governance-assistant-gap-treasury-lacks-ai-scenario-modeling-endpoint-despite-treasur-1ikwvd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Treasury Lacks AI Scenario Modeling Endpoint Despite Treasur source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_treasury_lacks_ai_scenario_modeling_endpoint_despite_treasur.js"
    }
  ],
  "aidao-governance-assistant-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturePage.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "proposal_id",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_id",
      "label": "Dao Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_ids",
      "label": "Dao Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_name",
      "label": "Dao Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_text",
      "label": "Proposal Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_type",
      "label": "Proposal Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "sensitivity",
      "label": "Sensitivity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "target_risk",
      "label": "Target Risk",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "aidao-governance-assistant-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturePage.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "proposal_id",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_id",
      "label": "Dao Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_ids",
      "label": "Dao Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dao_name",
      "label": "Dao Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_text",
      "label": "Proposal Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "proposal_type",
      "label": "Proposal Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "sensitivity",
      "label": "Sensitivity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "target_risk",
      "label": "Target Risk",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-data-analyst-ai-chat-udusm7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.jsx"
    }
  ],
  "ai-data-analyst-ai-features-new-1iwwld-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features New source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturesNew.jsx"
    }
  ],
  "ai-data-analyst-cf-agentic-sql-query-generation-17tlee-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Sql Query Generation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAgenticSqlQueryGeneration.jsx"
    }
  ],
  "ai-data-analyst-detail-view-12qbhe-exact-ai": [
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DetailView.jsx"
    }
  ],
  "ai-data-analyst-ss-ai-fill-down-pyzwmr-exact-ai": [
    {
      "name": "source_range",
      "label": "Source Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. A1:A5",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "target_range",
      "label": "Target Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. A6:A20",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "fill_direction",
      "label": "Fill Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "down | right | up | left",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "fill_mode",
      "label": "Fill Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "linear | categorical | formula | AI",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    }
  ],
  "ai-data-analyst-ai-new-46ven9-exact-ai": [
    {
      "name": "actual_outcome",
      "label": "Actual Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "business_context",
      "label": "Business Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "cohorts",
      "label": "Cohorts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "columns",
      "label": "Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "current_runtime_ms",
      "label": "Current Runtime Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "data_source_id",
      "label": "Data Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "data_source_ids",
      "label": "Data Source Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "dialect",
      "label": "Dialect",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "evaluation_window_days",
      "label": "Evaluation Window Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "focus_source_id",
      "label": "Focus Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "frequency_per_day",
      "label": "Frequency Per Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "merge_goal",
      "label": "Merge Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "prediction_id",
      "label": "Prediction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sample_rows",
      "label": "Sample Rows",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sample_values",
      "label": "Sample Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "scan_depth",
      "label": "Scan Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "schema",
      "label": "Schema",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "schema_definition",
      "label": "Schema Definition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "severity_preference",
      "label": "Severity Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "source_id_a",
      "label": "Source Id A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "source_id_b",
      "label": "Source Id B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sql_query",
      "label": "Sql Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "table_name",
      "label": "Table Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "table_stats",
      "label": "Table Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "timestamps",
      "label": "Timestamps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "values",
      "label": "Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    }
  ],
  "ai-data-analyst-ss-feat-ai-fill-down-suvvrh-exact-ai": [
    {
      "name": "csv",
      "label": "Csv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "fill_direction",
      "label": "Fill Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "fill_mode",
      "label": "Fill Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "grid_id",
      "label": "Grid Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "source_range",
      "label": "Source Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "target_range",
      "label": "Target Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    }
  ],
  "ai-data-analyst-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.jsx"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DetailView.jsx"
    },
    {
      "name": "source_range",
      "label": "Source Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. A1:A5",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "target_range",
      "label": "Target Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. A6:A20",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "fill_direction",
      "label": "Fill Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "down | right | up | left",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "fill_mode",
      "label": "Fill Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "linear | categorical | formula | AI",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "actual_outcome",
      "label": "Actual Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "business_context",
      "label": "Business Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "cohorts",
      "label": "Cohorts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "columns",
      "label": "Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "current_runtime_ms",
      "label": "Current Runtime Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "data_source_id",
      "label": "Data Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "data_source_ids",
      "label": "Data Source Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "dialect",
      "label": "Dialect",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "evaluation_window_days",
      "label": "Evaluation Window Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "focus_source_id",
      "label": "Focus Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "frequency_per_day",
      "label": "Frequency Per Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "merge_goal",
      "label": "Merge Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "prediction_id",
      "label": "Prediction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sample_rows",
      "label": "Sample Rows",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sample_values",
      "label": "Sample Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "scan_depth",
      "label": "Scan Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "schema",
      "label": "Schema",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "schema_definition",
      "label": "Schema Definition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "severity_preference",
      "label": "Severity Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "source_id_a",
      "label": "Source Id A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "source_id_b",
      "label": "Source Id B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sql_query",
      "label": "Sql Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "table_name",
      "label": "Table Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "table_stats",
      "label": "Table Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "timestamps",
      "label": "Timestamps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "values",
      "label": "Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "csv",
      "label": "Csv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "grid_id",
      "label": "Grid Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    }
  ],
  "ai-data-analyst-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.jsx"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DetailView.jsx"
    },
    {
      "name": "source_range",
      "label": "Source Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. A1:A5",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "target_range",
      "label": "Target Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. A6:A20",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "fill_direction",
      "label": "Fill Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "down | right | up | left",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "fill_mode",
      "label": "Fill Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "linear | categorical | formula | AI",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ss/SsAiFillDown.jsx"
    },
    {
      "name": "actual_outcome",
      "label": "Actual Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "business_context",
      "label": "Business Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "cohorts",
      "label": "Cohorts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "columns",
      "label": "Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "current_runtime_ms",
      "label": "Current Runtime Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "data_source_id",
      "label": "Data Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "data_source_ids",
      "label": "Data Source Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "dialect",
      "label": "Dialect",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "evaluation_window_days",
      "label": "Evaluation Window Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "focus_source_id",
      "label": "Focus Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "frequency_per_day",
      "label": "Frequency Per Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "merge_goal",
      "label": "Merge Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "prediction_id",
      "label": "Prediction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sample_rows",
      "label": "Sample Rows",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sample_values",
      "label": "Sample Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "scan_depth",
      "label": "Scan Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "schema",
      "label": "Schema",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "schema_definition",
      "label": "Schema Definition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "severity_preference",
      "label": "Severity Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "source_id_a",
      "label": "Source Id A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "source_id_b",
      "label": "Source Id B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "sql_query",
      "label": "Sql Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "table_name",
      "label": "Table Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "table_stats",
      "label": "Table Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "timestamps",
      "label": "Timestamps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "values",
      "label": "Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "csv",
      "label": "Csv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "grid_id",
      "label": "Grid Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ssFeat_aiFillDown.js"
    }
  ],
  "ai-database-admin-agent-agents-new-page-11nusc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents New Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsNewPage.js"
    }
  ],
  "ai-database-admin-agent-agents-page-z7c154-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    }
  ],
  "ai-database-admin-agent-cf-query-optimization-agent-1h0fjd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Query Optimization Agent source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfQueryOptimizationAgent.js"
    }
  ],
  "ai-database-admin-agent-failover-drill-page-18mf2t-exact-ai": [
    {
      "name": "backup_age_hours",
      "label": "Backup Age Hours",
      "type": "text",
      "defaultValue": "9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "lag_seconds",
      "label": "Lag Seconds",
      "type": "number",
      "defaultValue": "18",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "last_drill_days",
      "label": "Last Drill Days",
      "type": "text",
      "defaultValue": "64",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "missing_steps",
      "label": "Missing Steps",
      "type": "text",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "replicas",
      "label": "Replicas",
      "type": "text",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "runbook_steps",
      "label": "Runbook Steps",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    }
  ],
  "ai-database-admin-agent-gap-no-replication-failover-management-1lk8kh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Replication Failover Management source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoReplicationFailoverManagement.js"
    }
  ],
  "ai-database-admin-agent-agents-bn6792-exact-ai": [
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "table_info",
      "label": "Table Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    }
  ],
  "ai-database-admin-agent-agents-new-3dqip6-exact-ai": [
    {
      "name": "app_count",
      "label": "App Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "audit_columns",
      "label": "Audit Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "avg_active_connections",
      "label": "Avg Active Connections",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "backup_history",
      "label": "Backup History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "baseline",
      "label": "Baseline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "blocking_queries",
      "label": "Blocking Queries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "columns",
      "label": "Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "current_pool_size",
      "label": "Current Pool Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "current_size_gb",
      "label": "Current Size Gb",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_id",
      "label": "Db Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_max_connections",
      "label": "Db Max Connections",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_name",
      "label": "Db Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "error_rate_pct",
      "label": "Error Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "frequent_joins",
      "label": "Frequent Joins",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "grants",
      "label": "Grants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "growth_rate_pct",
      "label": "Growth Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "lag_seconds",
      "label": "Lag Seconds",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "monthly_storage_cost_usd_per_gb",
      "label": "Monthly Storage Cost Usd Per Gb",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "peak_active_connections",
      "label": "Peak Active Connections",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "primary_lsn",
      "label": "Primary Lsn",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "query_patterns",
      "label": "Query Patterns",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "queue_depth",
      "label": "Queue Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "recent_lag_history",
      "label": "Recent Lag History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "replica_count",
      "label": "Replica Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "replica_lsn",
      "label": "Replica Lsn",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schedule",
      "label": "Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schema",
      "label": "Schema",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schema_definition",
      "label": "Schema Definition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "series",
      "label": "Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "sql_query",
      "label": "Sql Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "sync_mode",
      "label": "Sync Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "table_name",
      "label": "Table Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "time_horizon_months",
      "label": "Time Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "time_window_hours",
      "label": "Time Window Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "total_size_gb",
      "label": "Total Size Gb",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "wait_events",
      "label": "Wait Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "write_to_read_ratio",
      "label": "Write To Read Ratio",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    }
  ],
  "ai-database-admin-agent-failover-drill-txfky7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Failover Drill source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/failoverDrill.js"
    }
  ],
  "ai-database-admin-agent-gap-no-replication-failover-management-3q8zmw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Replication Failover Management source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_replication_failover_management.js"
    }
  ],
  "ai-database-admin-agent-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents New Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsNewPage.js"
    },
    {
      "name": "backup_age_hours",
      "label": "Backup Age Hours",
      "type": "text",
      "defaultValue": "9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "lag_seconds",
      "label": "Lag Seconds",
      "type": "number",
      "defaultValue": "18",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "last_drill_days",
      "label": "Last Drill Days",
      "type": "text",
      "defaultValue": "64",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "missing_steps",
      "label": "Missing Steps",
      "type": "text",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "replicas",
      "label": "Replicas",
      "type": "text",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "runbook_steps",
      "label": "Runbook Steps",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "table_info",
      "label": "Table Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "app_count",
      "label": "App Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "audit_columns",
      "label": "Audit Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "avg_active_connections",
      "label": "Avg Active Connections",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "backup_history",
      "label": "Backup History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "baseline",
      "label": "Baseline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "blocking_queries",
      "label": "Blocking Queries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "columns",
      "label": "Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "current_pool_size",
      "label": "Current Pool Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "current_size_gb",
      "label": "Current Size Gb",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_id",
      "label": "Db Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_max_connections",
      "label": "Db Max Connections",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_name",
      "label": "Db Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "error_rate_pct",
      "label": "Error Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "frequent_joins",
      "label": "Frequent Joins",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "grants",
      "label": "Grants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "growth_rate_pct",
      "label": "Growth Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "monthly_storage_cost_usd_per_gb",
      "label": "Monthly Storage Cost Usd Per Gb",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "peak_active_connections",
      "label": "Peak Active Connections",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "primary_lsn",
      "label": "Primary Lsn",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "query_patterns",
      "label": "Query Patterns",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "queue_depth",
      "label": "Queue Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "recent_lag_history",
      "label": "Recent Lag History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "replica_count",
      "label": "Replica Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "replica_lsn",
      "label": "Replica Lsn",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schedule",
      "label": "Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schema",
      "label": "Schema",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schema_definition",
      "label": "Schema Definition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "series",
      "label": "Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "sql_query",
      "label": "Sql Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "sync_mode",
      "label": "Sync Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "table_name",
      "label": "Table Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "time_horizon_months",
      "label": "Time Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "time_window_hours",
      "label": "Time Window Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "total_size_gb",
      "label": "Total Size Gb",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "wait_events",
      "label": "Wait Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "write_to_read_ratio",
      "label": "Write To Read Ratio",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    }
  ],
  "ai-database-admin-agent-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents New Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsNewPage.js"
    },
    {
      "name": "backup_age_hours",
      "label": "Backup Age Hours",
      "type": "text",
      "defaultValue": "9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "lag_seconds",
      "label": "Lag Seconds",
      "type": "number",
      "defaultValue": "18",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "last_drill_days",
      "label": "Last Drill Days",
      "type": "text",
      "defaultValue": "64",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "missing_steps",
      "label": "Missing Steps",
      "type": "text",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "replicas",
      "label": "Replicas",
      "type": "text",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "runbook_steps",
      "label": "Runbook Steps",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FailoverDrillPage.js"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "table_info",
      "label": "Table Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "app_count",
      "label": "App Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "audit_columns",
      "label": "Audit Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "avg_active_connections",
      "label": "Avg Active Connections",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "backup_history",
      "label": "Backup History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "baseline",
      "label": "Baseline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "blocking_queries",
      "label": "Blocking Queries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "columns",
      "label": "Columns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "current_pool_size",
      "label": "Current Pool Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "current_size_gb",
      "label": "Current Size Gb",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_id",
      "label": "Db Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_max_connections",
      "label": "Db Max Connections",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "db_name",
      "label": "Db Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "error_rate_pct",
      "label": "Error Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "frequent_joins",
      "label": "Frequent Joins",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "grants",
      "label": "Grants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "growth_rate_pct",
      "label": "Growth Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "monthly_storage_cost_usd_per_gb",
      "label": "Monthly Storage Cost Usd Per Gb",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "peak_active_connections",
      "label": "Peak Active Connections",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "primary_lsn",
      "label": "Primary Lsn",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "query_patterns",
      "label": "Query Patterns",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "queue_depth",
      "label": "Queue Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "recent_lag_history",
      "label": "Recent Lag History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "replica_count",
      "label": "Replica Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "replica_lsn",
      "label": "Replica Lsn",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schedule",
      "label": "Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schema",
      "label": "Schema",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "schema_definition",
      "label": "Schema Definition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "series",
      "label": "Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "sql_query",
      "label": "Sql Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "sync_mode",
      "label": "Sync Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "table_name",
      "label": "Table Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "time_horizon_months",
      "label": "Time Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "time_window_hours",
      "label": "Time Window Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "total_size_gb",
      "label": "Total Size Gb",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "wait_events",
      "label": "Wait Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    },
    {
      "name": "write_to_read_ratio",
      "label": "Write To Read Ratio",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agentsNew.js"
    }
  ],
  "ai-data-labeling-platform-ai-features-r1w8me-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.jsx"
    }
  ],
  "ai-data-labeling-platform-data-imports-1ar7cn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Data Imports source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DataImports.jsx"
    }
  ],
  "ai-data-labeling-platform-gap-no-integration-with-ml-training-pipelines-elictu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Integration With Ml Training Pipelines source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoIntegrationWithMlTrainingPipelines.jsx"
    }
  ],
  "ai-data-labeling-platform-ai-features-1ca83q-exact-ai": [
    {
      "name": "annotations",
      "label": "Annotations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "data_item",
      "label": "Data Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "dataset_summary",
      "label": "Dataset Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "label_count",
      "label": "Label Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "labeler",
      "label": "Labeler",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "modality",
      "label": "Modality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "sample_size",
      "label": "Sample Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    }
  ],
  "ai-data-labeling-platform-gap-no-integration-with-ml-training-pipelines-j2eig7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Integration With Ml Training Pipelines source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_integration_with_ml_training_pipelines.js"
    }
  ],
  "ai-data-labeling-platform-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.jsx"
    },
    {
      "name": "annotations",
      "label": "Annotations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "data_item",
      "label": "Data Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "dataset_summary",
      "label": "Dataset Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "label_count",
      "label": "Label Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "labeler",
      "label": "Labeler",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "modality",
      "label": "Modality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "sample_size",
      "label": "Sample Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    }
  ],
  "ai-data-labeling-platform-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.jsx"
    },
    {
      "name": "annotations",
      "label": "Annotations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "data_item",
      "label": "Data Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "dataset_summary",
      "label": "Dataset Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "label_count",
      "label": "Label Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "labeler",
      "label": "Labeler",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "modality",
      "label": "Modality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    },
    {
      "name": "sample_size",
      "label": "Sample Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiFeatures.js"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-cf-adaptive-workforce-privacy-training-plat-yvg79-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Adaptive Workforce Privacy Training Plat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAdaptiveWorkforcePrivacyTrainingPlat.jsx"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-cf-agentic-compliance-auditor-continuously-1q5rkk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Compliance Auditor Continuously source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAgenticComplianceAuditorContinuously.jsx"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-agentic-compliance-auditor-14ogk0-exact-ai": [
    {
      "name": "data_categories = []",
      "label": "Data Categories = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "scope = 'all'",
      "label": "Scope = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "target_uris = []",
      "label": "Target Uris = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-ai-5cuwes-exact-ai": [
    {
      "name": "'age'",
      "label": "'Age'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "'race'",
      "label": "'Race'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "'religion']",
      "label": "'Religion']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "activity_id",
      "label": "Activity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "activity_name",
      "label": "Activity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "app_or_site_url",
      "label": "App Or Site Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "assessment_name",
      "label": "Assessment Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "breach_type",
      "label": "Breach Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "collection_method",
      "label": "Collection Method",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "compliance_gaps",
      "label": "Compliance Gaps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_mechanism",
      "label": "Consent Mechanism",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_text",
      "label": "Consent Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_type",
      "label": "Consent Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "controller_name",
      "label": "Controller Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cookies_description",
      "label": "Cookies Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country_scope",
      "label": "Country Scope",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_practices",
      "label": "Current Practices",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_retention_period",
      "label": "Current Retention Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_training",
      "label": "Current Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_affected",
      "label": "Data Affected",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories",
      "label": "Data Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories = []",
      "label": "Data Categories = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories_affected",
      "label": "Data Categories Affected",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories_shared",
      "label": "Data Categories Shared",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_category",
      "label": "Data Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_fields",
      "label": "Data Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_processing_activities",
      "label": "Data Processing Activities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subject_description",
      "label": "Data Subject Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subjects",
      "label": "Data Subjects",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subjects = []",
      "label": "Data Subjects = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "datasets_with_pii = []",
      "label": "Datasets With Pii = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dpa_signed",
      "label": "Dpa Signed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "employee_role",
      "label": "Employee Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "granularity",
      "label": "Granularity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "identified_risks",
      "label": "Identified Risks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction = 'EU'",
      "label": "Jurisdiction = 'EU'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction = 'EU/EEA'",
      "label": "Jurisdiction = 'EU EEA'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "legal_basis",
      "label": "Legal Basis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "number_of_individuals",
      "label": "Number Of Individuals",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_description",
      "label": "Organization Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_name",
      "label": "Organization Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_type",
      "label": "Organization Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "policy_type",
      "label": "Policy Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processing_description",
      "label": "Processing Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processing_purpose",
      "label": "Processing Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processor_name",
      "label": "Processor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "protected_attributes = ['gender'",
      "label": "Protected Attributes = ['Gender'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipient_name",
      "label": "Recipient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipient_type",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region = 'EU'",
      "label": "Region = 'EU'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulation",
      "label": "Regulation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulatory_requirement",
      "label": "Regulatory Requirement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "request_type",
      "label": "Request Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "request_type = 'access'",
      "label": "Request Type = 'Access'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "requester_name",
      "label": "Requester Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retention_period",
      "label": "Retention Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "roles = []",
      "label": "Roles = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "root_cause",
      "label": "Root Cause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_outcomes = []",
      "label": "Sample Outcomes = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_values",
      "label": "Sample Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scc_in_place",
      "label": "Scc In Place",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sdks_libraries = []",
      "label": "Sdks Libraries = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sensitivity_overview",
      "label": "Sensitivity Overview",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "services_provided",
      "label": "Services Provided",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_country",
      "label": "Source Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "specific_requirements",
      "label": "Specific Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sub_processors_allowed = false",
      "label": "Sub Processors Allowed = False",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "system_description",
      "label": "System Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "systems_in_scope = []",
      "label": "Systems In Scope = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "training_data_summary",
      "label": "Training Data Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transfer_mechanism",
      "label": "Transfer Mechanism",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transfer_outside_eea = false",
      "label": "Transfer Outside Eea = False",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor_type",
      "label": "Vendor Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-training-records-1nfp6w-exact-ai": [
    {
      "name": "assigned_date",
      "label": "Assigned Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "certificate_issued",
      "label": "Certificate Issued",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "completion_date",
      "label": "Completion Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "delivery_method",
      "label": "Delivery Method",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_department",
      "label": "Employee Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_email",
      "label": "Employee Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_name",
      "label": "Employee Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_role",
      "label": "Employee Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "passed",
      "label": "Passed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "passing_score",
      "label": "Passing Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "topics_covered",
      "label": "Topics Covered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "training_name",
      "label": "Training Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "training_type",
      "label": "Training Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-vendor-supply-chain-visibility-u7e2u8-exact-ai": [
    {
      "name": "focus_vendor_id",
      "label": "Focus Vendor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/vendorSupplyChainVisibility.js"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Adaptive Workforce Privacy Training Plat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAdaptiveWorkforcePrivacyTrainingPlat.jsx"
    },
    {
      "name": "data_categories = []",
      "label": "Data Categories = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "scope = 'all'",
      "label": "Scope = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "target_uris = []",
      "label": "Target Uris = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "'age'",
      "label": "'Age'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "'race'",
      "label": "'Race'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "'religion']",
      "label": "'Religion']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "activity_id",
      "label": "Activity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "activity_name",
      "label": "Activity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "app_or_site_url",
      "label": "App Or Site Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "assessment_name",
      "label": "Assessment Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "breach_type",
      "label": "Breach Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "collection_method",
      "label": "Collection Method",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "compliance_gaps",
      "label": "Compliance Gaps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_mechanism",
      "label": "Consent Mechanism",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_text",
      "label": "Consent Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_type",
      "label": "Consent Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "controller_name",
      "label": "Controller Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cookies_description",
      "label": "Cookies Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country_scope",
      "label": "Country Scope",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_practices",
      "label": "Current Practices",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_retention_period",
      "label": "Current Retention Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_training",
      "label": "Current Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_affected",
      "label": "Data Affected",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories",
      "label": "Data Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories_affected",
      "label": "Data Categories Affected",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories_shared",
      "label": "Data Categories Shared",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_category",
      "label": "Data Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_fields",
      "label": "Data Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_processing_activities",
      "label": "Data Processing Activities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subject_description",
      "label": "Data Subject Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subjects",
      "label": "Data Subjects",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subjects = []",
      "label": "Data Subjects = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "datasets_with_pii = []",
      "label": "Datasets With Pii = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dpa_signed",
      "label": "Dpa Signed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "employee_role",
      "label": "Employee Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "granularity",
      "label": "Granularity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "identified_risks",
      "label": "Identified Risks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction = 'EU'",
      "label": "Jurisdiction = 'EU'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction = 'EU/EEA'",
      "label": "Jurisdiction = 'EU EEA'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "legal_basis",
      "label": "Legal Basis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "number_of_individuals",
      "label": "Number Of Individuals",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_description",
      "label": "Organization Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_name",
      "label": "Organization Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_type",
      "label": "Organization Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "policy_type",
      "label": "Policy Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processing_description",
      "label": "Processing Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processing_purpose",
      "label": "Processing Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processor_name",
      "label": "Processor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "protected_attributes = ['gender'",
      "label": "Protected Attributes = ['Gender'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipient_name",
      "label": "Recipient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipient_type",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region = 'EU'",
      "label": "Region = 'EU'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulation",
      "label": "Regulation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulatory_requirement",
      "label": "Regulatory Requirement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "request_type",
      "label": "Request Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "request_type = 'access'",
      "label": "Request Type = 'Access'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "requester_name",
      "label": "Requester Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retention_period",
      "label": "Retention Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "roles = []",
      "label": "Roles = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "root_cause",
      "label": "Root Cause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_outcomes = []",
      "label": "Sample Outcomes = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_values",
      "label": "Sample Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scc_in_place",
      "label": "Scc In Place",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sdks_libraries = []",
      "label": "Sdks Libraries = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sensitivity_overview",
      "label": "Sensitivity Overview",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "services_provided",
      "label": "Services Provided",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_country",
      "label": "Source Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "specific_requirements",
      "label": "Specific Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sub_processors_allowed = false",
      "label": "Sub Processors Allowed = False",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "system_description",
      "label": "System Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "systems_in_scope = []",
      "label": "Systems In Scope = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "training_data_summary",
      "label": "Training Data Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transfer_mechanism",
      "label": "Transfer Mechanism",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transfer_outside_eea = false",
      "label": "Transfer Outside Eea = False",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor_type",
      "label": "Vendor Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "assigned_date",
      "label": "Assigned Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "certificate_issued",
      "label": "Certificate Issued",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "completion_date",
      "label": "Completion Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "delivery_method",
      "label": "Delivery Method",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_department",
      "label": "Employee Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_email",
      "label": "Employee Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_name",
      "label": "Employee Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "passed",
      "label": "Passed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "passing_score",
      "label": "Passing Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "topics_covered",
      "label": "Topics Covered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "training_name",
      "label": "Training Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "training_type",
      "label": "Training Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "focus_vendor_id",
      "label": "Focus Vendor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/vendorSupplyChainVisibility.js"
    }
  ],
  "aigdpr-data-mapping-privacy-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Adaptive Workforce Privacy Training Plat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAdaptiveWorkforcePrivacyTrainingPlat.jsx"
    },
    {
      "name": "data_categories = []",
      "label": "Data Categories = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "scope = 'all'",
      "label": "Scope = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "target_uris = []",
      "label": "Target Uris = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticComplianceAuditor.js"
    },
    {
      "name": "'age'",
      "label": "'Age'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "'race'",
      "label": "'Race'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "'religion']",
      "label": "'Religion']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "activity_id",
      "label": "Activity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "activity_name",
      "label": "Activity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "app_or_site_url",
      "label": "App Or Site Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "assessment_name",
      "label": "Assessment Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "breach_type",
      "label": "Breach Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "collection_method",
      "label": "Collection Method",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "compliance_gaps",
      "label": "Compliance Gaps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_mechanism",
      "label": "Consent Mechanism",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_text",
      "label": "Consent Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "consent_type",
      "label": "Consent Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "controller_name",
      "label": "Controller Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cookies_description",
      "label": "Cookies Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country_scope",
      "label": "Country Scope",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_practices",
      "label": "Current Practices",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_retention_period",
      "label": "Current Retention Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_training",
      "label": "Current Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_affected",
      "label": "Data Affected",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories",
      "label": "Data Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories_affected",
      "label": "Data Categories Affected",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_categories_shared",
      "label": "Data Categories Shared",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_category",
      "label": "Data Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_fields",
      "label": "Data Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_processing_activities",
      "label": "Data Processing Activities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subject_description",
      "label": "Data Subject Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subjects",
      "label": "Data Subjects",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_subjects = []",
      "label": "Data Subjects = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "datasets_with_pii = []",
      "label": "Datasets With Pii = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dpa_signed",
      "label": "Dpa Signed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "employee_role",
      "label": "Employee Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "granularity",
      "label": "Granularity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "identified_risks",
      "label": "Identified Risks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction = 'EU'",
      "label": "Jurisdiction = 'EU'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction = 'EU/EEA'",
      "label": "Jurisdiction = 'EU EEA'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "legal_basis",
      "label": "Legal Basis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "number_of_individuals",
      "label": "Number Of Individuals",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_description",
      "label": "Organization Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_name",
      "label": "Organization Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_type",
      "label": "Organization Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "policy_type",
      "label": "Policy Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processing_description",
      "label": "Processing Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processing_purpose",
      "label": "Processing Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processor_name",
      "label": "Processor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "protected_attributes = ['gender'",
      "label": "Protected Attributes = ['Gender'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipient_name",
      "label": "Recipient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipient_type",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region = 'EU'",
      "label": "Region = 'EU'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulation",
      "label": "Regulation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulatory_requirement",
      "label": "Regulatory Requirement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "request_type",
      "label": "Request Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "request_type = 'access'",
      "label": "Request Type = 'Access'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "requester_name",
      "label": "Requester Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retention_period",
      "label": "Retention Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "roles = []",
      "label": "Roles = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "root_cause",
      "label": "Root Cause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_outcomes = []",
      "label": "Sample Outcomes = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_values",
      "label": "Sample Values",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scc_in_place",
      "label": "Scc In Place",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sdks_libraries = []",
      "label": "Sdks Libraries = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sensitivity_overview",
      "label": "Sensitivity Overview",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "services_provided",
      "label": "Services Provided",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_country",
      "label": "Source Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "specific_requirements",
      "label": "Specific Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sub_processors_allowed = false",
      "label": "Sub Processors Allowed = False",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "system_description",
      "label": "System Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "systems_in_scope = []",
      "label": "Systems In Scope = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "training_data_summary",
      "label": "Training Data Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transfer_mechanism",
      "label": "Transfer Mechanism",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transfer_outside_eea = false",
      "label": "Transfer Outside Eea = False",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor_type",
      "label": "Vendor Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "assigned_date",
      "label": "Assigned Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "certificate_issued",
      "label": "Certificate Issued",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "completion_date",
      "label": "Completion Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "delivery_method",
      "label": "Delivery Method",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_department",
      "label": "Employee Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_email",
      "label": "Employee Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "employee_name",
      "label": "Employee Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "passed",
      "label": "Passed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "passing_score",
      "label": "Passing Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "topics_covered",
      "label": "Topics Covered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "training_name",
      "label": "Training Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "training_type",
      "label": "Training Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/trainingRecords.js"
    },
    {
      "name": "focus_vendor_id",
      "label": "Focus Vendor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/vendorSupplyChainVisibility.js"
    }
  ],
  "ai-governance-model-ops-ai-prompt-injection-test-page-10e5vc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Prompt Injection Test Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPromptInjectionTestPage.js"
    }
  ],
  "ai-governance-model-ops-prompts-page-39wmk5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Prompts Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptsPage.js"
    }
  ],
  "ai-governance-model-ops-prompts-1wre0t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Prompts source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/prompts.js"
    }
  ],
  "ai-governance-model-ops-ai-audit-bias-page-hp7wda-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Audit Bias Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAuditBiasPage.js"
    }
  ],
  "ai-governance-model-ops-ai-bias-summary-page-suk82n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Bias Summary Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiasSummaryPage.js"
    }
  ],
  "ai-governance-model-ops-ai-data-lineage-page-dud67r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Data Lineage Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDataLineagePage.js"
    }
  ],
  "ai-governance-model-ops-ai-detect-drift-page-710yjk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Detect Drift Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDetectDriftPage.js"
    }
  ],
  "ai-governance-model-ops-ai-draft-policy-page-tnjw4v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Draft Policy Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftPolicyPage.js"
    }
  ],
  "ai-governance-model-ops-ai-drift-narrative-page-1jf2tw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Drift Narrative Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriftNarrativePage.js"
    }
  ],
  "ai-governance-model-ops-ai-energy-cost-page-112ynn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Energy Cost Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnergyCostPage.js"
    }
  ],
  "ai-governance-model-ops-ai-explain-decision-page-cp1n19-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Explain Decision Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExplainDecisionPage.js"
    }
  ],
  "ai-governance-model-ops-ai-fairness-curve-page-wtez3e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Fairness Curve Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFairnessCurvePage.js"
    }
  ],
  "ai-governance-model-ops-ai-jailbreak-test-page-b84cvh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Jailbreak Test Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIJailbreakTestPage.js"
    }
  ],
  "ai-governance-model-ops-ai-map-compliance-page-9uf9wr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Map Compliance Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMapCompliancePage.js"
    }
  ],
  "ai-governance-model-ops-ai-model-card-generator-page-y8vski-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Model Card Generator Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelCardGeneratorPage.js"
    }
  ],
  "ai-governance-model-ops-ai-redteam-triage-page-1yo9q5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Redteam Triage Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRedteamTriagePage.js"
    }
  ],
  "ai-governance-model-ops-ai-score-risk-page-fhz6dd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Score Risk Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScoreRiskPage.js"
    }
  ],
  "ai-governance-model-ops-ai-ssp-drafter-page-19zmre-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Ssp Drafter Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISspDrafterPage.js"
    }
  ],
  "ai-governance-model-ops-ai-third-party-assess-page-1xve52-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Third Party Assess Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIThirdPartyAssessPage.js"
    }
  ],
  "ai-governance-model-ops-ai-triage-incident-page-p9avyo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Triage Incident Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITriageIncidentPage.js"
    }
  ],
  "ai-governance-model-ops-model-exception-waiver-board-11rwkc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Model Exception Waiver Board source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ModelExceptionWaiverBoard.js"
    }
  ],
  "ai-governance-model-ops-training-runs-page-gz3tg8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training Runs Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingRunsPage.js"
    }
  ],
  "ai-governance-model-ops-ai-5cuwes-exact-ai": [
    {
      "name": "analyses",
      "label": "Analyses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audits",
      "label": "Audits",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "model_id",
      "label": "Model Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-governance-model-ops-model-exception-waiver-board-uvaqjk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Model Exception Waiver Board source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/modelExceptionWaiverBoard.js"
    }
  ],
  "ai-governance-model-ops-training-runs-2buyhl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training Runs source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/training_runs.js"
    }
  ],
  "ai-governance-model-ops-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Prompt Injection Test Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPromptInjectionTestPage.js"
    },
    {
      "name": "analyses",
      "label": "Analyses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audits",
      "label": "Audits",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "model_id",
      "label": "Model Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-governance-model-ops-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Prompt Injection Test Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPromptInjectionTestPage.js"
    },
    {
      "name": "analyses",
      "label": "Analyses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audits",
      "label": "Audits",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "model_id",
      "label": "Model Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "airag-platform-prompt-templates-1m10zu-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "General",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "is_active",
      "label": "Is Active",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "template_text",
      "label": "Template Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    }
  ],
  "airag-platform-ai-summary-173ly3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Summary source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISummary.jsx"
    }
  ],
  "airag-platform-document-detail-nqfat3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Document Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DocumentDetail.jsx"
    }
  ],
  "airag-platform-source-workflow": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "General",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "is_active",
      "label": "Is Active",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "template_text",
      "label": "Template Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Summary source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISummary.jsx"
    }
  ],
  "airag-platform-ai-tools": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "General",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "is_active",
      "label": "Is Active",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "template_text",
      "label": "Template Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PromptTemplates.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Summary source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISummary.jsx"
    }
  ],
  "ai-synthetic-data-generator-dataset-detail-9v8aay-exact-ai": [
    {
      "name": "removeChild",
      "label": "Remove Child",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DatasetDetail.jsx"
    }
  ],
  "ai-synthetic-data-generator-gap-no-data-masking-anonymization-ai-1fu9tu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Data Masking Anonymization AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoDataMaskingAnonymizationAi.jsx"
    }
  ],
  "ai-synthetic-data-generator-gap-no-data-masking-anonymization-ai-1mnoc4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Data Masking Anonymization AI source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoDataMaskingAnonymizationAi.js"
    }
  ],
  "ai-synthetic-data-generator-source-workflow": [
    {
      "name": "removeChild",
      "label": "Remove Child",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DatasetDetail.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Data Masking Anonymization AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoDataMaskingAnonymizationAi.jsx"
    }
  ],
  "ai-synthetic-data-generator-ai-tools": [
    {
      "name": "removeChild",
      "label": "Remove Child",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DatasetDetail.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Data Masking Anonymization AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoDataMaskingAnonymizationAi.jsx"
    }
  ],
  "ai-test-generation-platform-cf-ai-test-generator-analyzing-code-and-producing-3ut3ll-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf AI Test Generator Analyzing Code And Producing source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAiTestGeneratorAnalyzingCodeAndProducing.jsx"
    }
  ],
  "ai-test-generation-platform-cf-flaky-test-detector-identifying-non-deterministic-failures-1nsiws-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Flaky Test Detector Identifying Non Deterministic Failures source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfFlakyTestDetectorIdentifyingNonDeterministicFailures.jsx"
    }
  ],
  "ai-test-generation-platform-gap-critical-gap-no-ai-driven-test-generation-axu5o9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Critical Gap No AI Driven Test Generation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapCriticalGapNoAiDrivenTestGeneration.jsx"
    }
  ],
  "ai-test-generation-platform-gap-no-mutation-testing-ai-analysis-14k642-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Mutation Testing AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoMutationTestingAiAnalysis.jsx"
    }
  ],
  "ai-test-generation-platform-ai-test-generator-unci9-exact-ai": [
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiTestGenerator.js"
    }
  ],
  "ai-test-generation-platform-gap-no-mutation-testing-ai-analysis-sjwrcm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Mutation Testing AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoMutationTestingAiAnalysis.js"
    }
  ],
  "ai-test-generation-platform-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf AI Test Generator Analyzing Code And Producing source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAiTestGeneratorAnalyzingCodeAndProducing.jsx"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiTestGenerator.js"
    }
  ],
  "ai-test-generation-platform-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf AI Test Generator Analyzing Code And Producing source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAiTestGeneratorAnalyzingCodeAndProducing.jsx"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiTestGenerator.js"
    }
  ],
  "cursor-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste cursor source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "cursor-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste cursor source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "librelane-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste librelane source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "librelane-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste librelane source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "no-code-ai-agency-page-rbmy3k-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai-usage/page.tsx"
    }
  ],
  "no-code-ai-agency-page-jg3kjs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    }
  ],
  "no-code-ai-agency-route-1irtxh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/custom-domains/route.ts"
    }
  ],
  "no-code-ai-agency-route-1alhkt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-usage/route.ts"
    }
  ],
  "no-code-ai-agency-route-1hu7oa-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    }
  ],
  "no-code-ai-agency-route-lj73f-exact-ai": [
    {
      "name": "priorRuns",
      "label": "Prior Runs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "workflowId",
      "label": "Workflow Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "workflowSpec",
      "label": "Workflow Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    }
  ],
  "no-code-ai-agency-route-mw648q-exact-ai": [
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/template-search/route.ts"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/template-search/route.ts"
    }
  ],
  "no-code-ai-agency-route-1xqoa7-exact-ai": [
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "preferredNodes",
      "label": "Preferred Nodes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    }
  ],
  "no-code-ai-agency-route-1i28yq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/models/route.ts"
    }
  ],
  "no-code-ai-agency-route-1pkiry-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/execute/route.ts"
    }
  ],
  "no-code-ai-agency-route-1qh4t8-exact-ai": [
    {
      "name": "currentConfig",
      "label": "Current Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "deploymentId",
      "label": "Deployment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "proposedConfig",
      "label": "Proposed Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    }
  ],
  "no-code-ai-agency-route-5o9m33-exact-ai": [
    {
      "name": "cursorNodeId",
      "label": "Cursor Node Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/autocomplete/route.ts"
    },
    {
      "name": "graph",
      "label": "Graph",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/autocomplete/route.ts"
    }
  ],
  "no-code-ai-agency-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai-usage/page.tsx"
    },
    {
      "name": "priorRuns",
      "label": "Prior Runs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "workflowId",
      "label": "Workflow Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "workflowSpec",
      "label": "Workflow Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/template-search/route.ts"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/template-search/route.ts"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "preferredNodes",
      "label": "Preferred Nodes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "currentConfig",
      "label": "Current Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "deploymentId",
      "label": "Deployment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "proposedConfig",
      "label": "Proposed Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "cursorNodeId",
      "label": "Cursor Node Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/autocomplete/route.ts"
    },
    {
      "name": "graph",
      "label": "Graph",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/autocomplete/route.ts"
    }
  ],
  "no-code-ai-agency-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai-usage/page.tsx"
    },
    {
      "name": "priorRuns",
      "label": "Prior Runs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "workflowId",
      "label": "Workflow Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "workflowSpec",
      "label": "Workflow Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/testing-agent/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/template-search/route.ts"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/template-search/route.ts"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "preferredNodes",
      "label": "Preferred Nodes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-modal-build/route.ts"
    },
    {
      "name": "currentConfig",
      "label": "Current Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "deploymentId",
      "label": "Deployment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "proposedConfig",
      "label": "Proposed Config",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deployment-review/route.ts"
    },
    {
      "name": "cursorNodeId",
      "label": "Cursor Node Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/autocomplete/route.ts"
    },
    {
      "name": "graph",
      "label": "Graph",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/autocomplete/route.ts"
    }
  ]
};
