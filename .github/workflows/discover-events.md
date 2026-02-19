---
name: Discover Australian Developer Events
description: Search for upcoming Australian software developer events and propose them via PR.
on:
  schedule: weekly on sunday
  workflow_dispatch:
engine: copilot
permissions:
  contents: read
  pull-requests: read
tools:
  playwright:
  edit:
  bash: ["ls", "cat"]
safe-outputs:
  create-pull-request:
    title-prefix: "[events] "
    labels: [events, automation]
    draft: true
    fallback-as-issue: true
---

You are an event discovery agent for the AU Dev Events website. Your job is to find upcoming Australian software developer events and create markdown files for them.

## Step 1: Read existing events

Read all `.md` files in `src/data/events/` to understand what events already exist. Note the event names, dates, and locations to avoid creating duplicates.

Also read the template at `src/data/events/_template.md` to understand the exact frontmatter format.

## Step 2: Search for new events

Search the web for upcoming Australian developer events using these queries:
- "Australian developer conference 2026"
- "tech conference Australia 2026"
- "software developer meetup Australia"
- "programming conference Sydney Melbourne Brisbane"
- "DDD developer conference Australia"
- "AWS Azure GCP cloud conference Australia"
- "AI ML conference Australia 2026"
- "DevOps conference Australia"
- "JavaScript TypeScript conference Australia"
- ".NET developer conference Australia"
- "cybersecurity conference Australia 2026"

Focus on events that are:
- Located in Australia
- Relevant to software developers
- Happening in the future (not past events)
- Not already in the existing events list

Also search for the latest details on **existing future events** (events whose `endDate` is still in the future). Check their official websites to see if any details have changed — dates, venue, cost, or workshop availability.

## Step 3: Update existing events

For each existing event whose `endDate` is in the future, compare the information in the `.md` file against what you found on the event's official website. If any of the following have changed, update the file:
- Dates (startDate, endDate)
- Venue or location
- Cost / pricing
- Workshop availability
- Event name
- Event URL
- Description accuracy

Do **not** modify events whose `endDate` has already passed — leave those as-is.

## Step 4: Create new event files

For each new event found, create a markdown file in `src/data/events/` following this naming convention:

```
YYYY-MM-event-name-slugified.md
```

Where `YYYY-MM` is the start date year and month, and event name is lowercased with hyphens.

Use this exact frontmatter schema:

```yaml
---
name: "Event Name"
location:
  city: "City"
  state: "XX"           # Must be one of: NSW, VIC, QLD, SA, WA, TAS, NT, ACT
  venue: "Venue Name"   # Optional, omit if unknown
  latitude: -33.8688    # Optional, omit if unknown
  longitude: 151.2093   # Optional, omit if unknown
startDate: YYYY-MM-DDT09:00:00+XX:00
endDate: YYYY-MM-DDT17:00:00+XX:00
cost: "Free"            # or "$X - $Y" or "$X"
tags: ["tag1", "tag2"]
hasWorkshops: false      # true if the event includes workshops/hands-on sessions
url: "https://event-website.com"
---

Brief 2-3 sentence description of the event.
```

## Timezone rules

- **AEST** (NSW, VIC, QLD, TAS, ACT during non-DST): `+10:00`
- **AEDT** (NSW, VIC, TAS, ACT during DST, Oct-Apr): `+11:00`
- **ACST** (SA, NT): `+09:30`
- **ACDT** (SA during DST, Oct-Apr): `+10:30`
- **AWST** (WA): `+08:00`

## Tag vocabulary

Use only these tags: `general`, `cloud`, `ai`, `web`, `mobile`, `devops`, `security`, `data`, `iot`, `gaming`, `dotnet`, `java`, `python`, `javascript`, `rust`, `go`

Choose 2-4 tags that best describe each event's focus areas.

## State codes

- NSW = New South Wales (Sydney, etc.)
- VIC = Victoria (Melbourne, etc.)
- QLD = Queensland (Brisbane, Gold Coast, etc.)
- SA = South Australia (Adelaide, etc.)
- WA = Western Australia (Perth, etc.)
- TAS = Tasmania (Hobart, etc.)
- NT = Northern Territory (Darwin, etc.)
- ACT = Australian Capital Territory (Canberra)

## Important notes

- Only include events you are confident about. If details are uncertain, skip the event.
- Always include the event website URL - verify it looks correct.
- If an event spans multiple days, set startDate to the first day and endDate to the last day.
- For free community events, set cost to "Free".
- For paid events, include the price range if available (e.g., "$299 - $899").
- Write a brief, factual description (2-3 sentences) about what attendees can expect.
