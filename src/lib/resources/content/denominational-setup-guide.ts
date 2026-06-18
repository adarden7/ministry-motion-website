import type { ResourceContent } from '../types';

export const denominationalSetupGuide: ResourceContent = {
  slug: 'denominational-setup-guide',
  kind: 'Guide',
  iconKey: 'book',
  title: 'Denominational Setup Guide: Configuring Ministry Motion for Your Tradition',
  subtitle: 'Stop wrestling with software that assumes every church is the same — here is how to make Ministry Motion speak your tradition\'s language from day one.',
  description: 'Step-by-step configuration for Baptist, Methodist, Pentecostal, Presbyterian, and non-denominational church structures — terminology, role hierarchy, and doctrine-sensitive AI context.',
  audience: 'Church Admins, Executive Pastors',
  extent: '24 pages',
  readTime: '20 min read',
  updated: 'June 2026',
  body: `Church software has a long history of assuming that "one worship team" looks the same everywhere. It does not. A Southern Baptist congregation with a music minister and a deacon board operates nothing like an Assemblies of God church where the worship leader may also carry prophetic and pastoral responsibilities. A Presbyterian congregation governed by elders uses language that would puzzle a bishop-led Methodist circuit. When the software does not match the church, administrators spend more time translating terminology than leading people — and AI tools trained on generic language produce suggestions that feel tone-deaf or even doctrinally inappropriate. This guide walks Church Admins and Executive Pastors through configuring Ministry Motion to fit five major traditions so that every screen, every automated workflow, and every Agent Council output reflects the language and governance your congregation already knows.

## Why Generic Church Software Breaks Down Across Traditions

Most worship-management platforms were designed with a single, loosely evangelical model in mind: a senior pastor at the top, a worship pastor below, and a collection of "volunteers" beneath that. Three problems emerge immediately when you apply this to a broad spectrum of traditions.

**Terminology friction.** When a Presbyterian elder logs into a system that calls every leader a "pastor," trust erodes. When a Pentecostal church's prophetic team is shoehorned into a "volunteer" bucket, the relational authority those members hold is invisible to the software — and therefore invisible to the AI agents reading that data.

**Governance mismatch.** Baptist polity is congregational: authority flows upward from the membership. Presbyterian polity is representative: authority flows through elected elders (session). Methodist polity is connectional and episcopal: a bishop oversees multiple churches (a charge or district). None of these maps cleanly onto a flat hierarchy, and any role-based access control system that ignores polity will either over-permission or under-permission the wrong people.

**Doctrine-sensitive AI context.** Ministry Motion's Agent Council — the set of AI agents that surface vocal assessments, service planning suggestions, and member journey insights — draws on context you supply during setup. If that context is blank or generic, agents will produce suggestions calibrated to no tradition in particular. A service-structure suggestion that works for a non-denominational contemporary church may be liturgically inappropriate for a high-church Methodist congregation. Doctrine-sensitive context tells agents what to assume, what vocabulary to use, and what to avoid.

## How Five Traditions Differ: A Quick Comparison

The table below is a starting point for your setup conversations — not an exhaustive theology. Use it to identify which columns matter most for your initial configuration.

| Dimension | Baptist (SBC / CBF) | Methodist (UMC) | Pentecostal (AoG / CoG) | Presbyterian (PCA / PCUSA) | Non-Denominational |
|---|---|---|---|---|---|
| **Governance model** | Congregational — members vote on major decisions | Connectional / episcopal — bishop and district superintendent have authority | Congregational with apostolic/pastoral leadership emphasis | Representative — session of ruling and teaching elders governs | Varies widely; often elder board or single senior pastor |
| **Primary leadership title** | Pastor / Music Minister | Pastor / Minister of Music | Pastor / Worship Leader / Evangelist | Teaching Elder / Ruling Elder | Lead Pastor / Worship Director |
| **Secondary leadership** | Deacon, Minister of Education | District Superintendent, Lay Leader | Associate Pastor, Prophetic Team | Ruling Elder, Deacon | Executive Pastor, Team Leader |
| **Sacrament or ordinance terminology** | Ordinances (Baptism by immersion, Lord's Supper) | Sacraments (Baptism — any mode, Holy Communion / Eucharist) | Ordinances (Baptism by immersion, Lord's Supper); emphasis on Holy Spirit baptism | Sacraments (Baptism — any mode, Lord's Supper / Communion) | Usually "ordinances" but varies; often informal |
| **Typical service structure** | Welcome, Congregational Worship Set, Sermon, Invitation / Altar Call, Benediction | Liturgical order — Gathering, Word, Table, Sending; varies by congregation | Extended worship, Altar time, Prophetic ministry, Sermon | Liturgical — Call to Worship, Prayer of Confession, Scripture, Sermon, Sacrament (periodic) | Flexible; often: Worship Set, Welcome, Announcements, Sermon, Response |
| **Choir / ensemble norms** | Traditional choir common; praise team growing | Chancel choir traditional; contemporary worship also common | Praise team primary; choir less common | Choir / ensemble common; pipe organ in many congregations | Praise team standard; choir less common |
| **Key AI context flag** | "Invitation / Altar Call" expected at service close | Liturgical calendar awareness; Wesleyan theology | Holy Spirit language; spontaneity in service flow | Reformed theology; structured liturgy; elder-approval sensibility | Contemporary, flexible; no fixed liturgy |

---

## Setup by Tradition

### Baptist Churches

**Role hierarchy configuration.** In Ministry Motion's member roles and RBAC settings, map your top-level leader to **Pastor** or **Senior Pastor**. If your tradition uses **Music Minister** rather than "Worship Pastor," update the worship leadership role label accordingly — Ministry Motion's configurable role terminology means the display name is decoupled from the underlying permission tier. Beneath the pastor, create roles for **Associate Pastor**, **Minister of Education** (if applicable), and **Deacon**. Deacons in Baptist polity may carry significant decision-making weight; assign them read access to service planning and member journey data but scope write permissions carefully — deacons typically approve direction rather than execute it.

**Member journey pipeline.** Baptist congregations often track a clear conversion-to-membership pathway: salvation decision at an invitation or altar call, public profession of faith, baptism by immersion, and membership vote. In the member journey pipeline, configure these as distinct lifecycle stages. The Agent Council will then surface readiness signals (e.g., attendance patterns, engagement with baptism-preparation content) at the right stage rather than offering generic "next step" prompts.

**Doctrine-sensitive AI context.** In your Agent Council configuration, set the tradition context to **Baptist / Evangelical** and enable the "Invitation / Altar Call" service element flag. This tells the service-planning agent to always budget time at the service close for a response moment and to avoid liturgical language (e.g., "Nunc Dimittis," "Agnus Dei") in song suggestions unless you explicitly request it. For vocal and worship analysis, the agent will calibrate song selection toward congregational singability and Southern gospel or contemporary Christian idioms rather than choral-anthem arrangements.

**Terminology reminders.** Use **Lord's Supper** rather than Communion or Eucharist. Use **Baptistery** rather than font. Ordinances, not sacraments. If you are a CBF congregation with more progressive leanings, you can override these defaults individually — the context flags are additive, not locked.

---

### Methodist Churches

**Role hierarchy configuration.** United Methodist polity places the local church within a larger connectional structure, so your in-app hierarchy should reflect that some authority is external. At the local level, map **Pastor** (appointed by the bishop) as the top role. If your congregation has a **Minister of Music** or **Director of Music Ministries**, assign them a dedicated worship leadership role with full service-planning write access. Add a **Lay Leader** role with read access to pastoral care and member journey data — lay leaders in Methodist polity carry significant authority in the charge conference. If you serve on a circuit (multiple congregations under one pastor), the multi-site configuration in Ministry Motion allows you to link churches to a shared leadership account without merging their data.

**Member journey pipeline.** Methodist theology emphasizes the means of grace and a process of sanctification (Wesley's ordo salutis). Configure the member journey pipeline with stages that reflect this: Seeker → Confirmed Member → Covenant Discipleship Group Participant → Ministry Leader. The Agent Council's member engagement scoring will surface members who are active in small groups but not yet in a discipleship covenant — a common next-step conversation for Methodist pastors.

**Doctrine-sensitive AI context.** Set the tradition context to **Methodist / Wesleyan** and enable **Liturgical Calendar** awareness. The service-planning agent will then flag seasons (Advent, Lent, Ordinary Time) and suggest service elements appropriate to those seasons. Enable **Eucharist / Holy Communion** language for sacrament references — UMC congregations typically celebrate open communion and may do so weekly or monthly. Set the hymn-tradition preference to **United Methodist Hymnal** as a baseline so the Agent Council prioritizes hymns your congregation already knows when generating song suggestions, while still surfacing contemporary options.

**Terminology reminders.** Use **Sacrament** (not ordinance). Use **Chancel** for the front worship area. **Holy Communion** or **Eucharist** rather than Lord's Supper. The worship leader role is often **Minister of Music** or **Director of Worship Arts**, not "Worship Pastor." Charge conference, not "business meeting."

---

### Pentecostal Churches

**Role hierarchy configuration.** Pentecostal polity varies by fellowship (Assemblies of God, Church of God Cleveland, IPHC, and others), but most share a strong pastoral authority model. Configure the top role as **Senior Pastor** or **Lead Pastor**. Below that, add **Associate Pastor**, **Worship Leader**, and — critically — a **Prophetic Team** or **Ministry Team** role. Ministry Motion's RBAC system allows you to create custom roles with scoped permissions; a prophetic team member may need access to service flow and altar-call planning but should not have write access to member financial data or administrative reports. If your church uses an **Armor Bearer** or **Elder Board**, add those roles and scope them to read-only pastoral care data.

**Member journey pipeline.** Pentecostal theology places significant emphasis on the baptism of the Holy Spirit as a distinct experience from conversion. Configure a dedicated lifecycle stage for **Spirit Baptism / Tongues** so the member journey pipeline can track and celebrate this milestone appropriately. The Agent Council's member engagement model will then know not to treat a member who is saved but not yet Spirit-baptized as "complete" in their foundational faith journey. Also configure stages for **Water Baptism** (typically by immersion following salvation) and **Ministry Activation** (the point at which a member begins serving in a gifting or ministry role).

**Doctrine-sensitive AI context.** Set the tradition context to **Pentecostal / Charismatic** and enable **Altar Time** and **Spontaneous Worship** flags. This tells the service-planning agent to build in unscheduled buffer time at the altar and to avoid rigidly timed service templates. Enable **Gifts of the Spirit** language so that when the vocal assessment and member journey agents surface singer readiness reports, they acknowledge prophetic and intercessory roles alongside technical vocal ability. The Agent Council will use language like "ministry opportunity" rather than "performance slot" and will flag when a member's gift profile suggests a hosting or altar-ministry role rather than a featured vocal role.

**Terminology reminders.** Use **Altar Call** and **Altar Ministry** rather than "invitation" or "response time." Use **Praise Team** rather than "choir" in most cases, though some Pentecostal congregations maintain a full choir. Use **Lord's Supper** or **Communion** — Pentecostal traditions generally use "ordinance" language. The **Holy Ghost** is the preferred term in many traditional Pentecostal fellowships; configure this in the AI context if your congregation uses it.

---

### Presbyterian Churches

**Role hierarchy configuration.** Presbyterian polity is elder-governed. The key distinction is between **Teaching Elders** (ordained ministers) and **Ruling Elders** (lay elders elected by the congregation to the session). In Ministry Motion, create both as distinct roles under RBAC. The session — collectively — governs the church, so ruling elders should have read access to congregational data, worship planning, and member journey summaries. Teaching elders (your pastor or associate pastors) hold full administrative access. Add a **Deacon** role for the board of deacons, whose mandate is typically mercy ministry and physical care of the congregation; scope them to member care and benevolence data rather than worship planning.

If your church is PCA, the distinction between teaching and ruling elders is sharp and doctrinal. If PCUSA, session governance still applies but with more latitude. Configure accordingly.

**Member journey pipeline.** Reformed theology emphasizes covenant membership. Configure the member journey with stages that reflect covenantal entry: Inquirer → Communicant Member (following confirmation or profession of faith) → Covenant Renewal (periodic reaffirmation, if practiced) → Elder / Deacon Nomination. The Agent Council will surface members whose engagement patterns suggest readiness for elder nomination — a long tenure of consistent service, discipleship participation, and community involvement.

**Doctrine-sensitive AI context.** Set the tradition context to **Presbyterian / Reformed** and enable **Liturgical Structure** and **Regulative Principle** flags. The regulative principle — that worship includes only what Scripture prescribes — has practical implications: the service-planning agent will avoid suggesting worship elements without a clear scriptural or confessional basis (e.g., it will not suggest dramatic theatrical elements without noting they fall outside traditional Reformed practice). Enable **Westminster Standards** reference mode if your congregation is PCA, or **Book of Common Worship** if PCUSA — the agent will use appropriate liturgical language for each. Set sacrament terminology to **Lord's Supper** (PCA) or **Eucharist / Holy Communion** (PCUSA) per your congregation's usage.

**Terminology reminders.** Use **Session** for the governing board. Use **Ruling Elder** and **Teaching Elder** — not "lay elder" and "pastor" as primary labels. Use **Communicant Member** rather than "full member." **Call to Worship** begins the service, and a **Benediction** closes it — not a "send-off" or "closing prayer." The congregation's primary song collection is typically **psalms and hymns**, and the Agent Council will weight traditional hymnic content accordingly.

---

### Non-Denominational Churches

**Role hierarchy configuration.** Non-denominational churches resist a single model by definition, so Ministry Motion's configurable role hierarchy is especially valuable here. Most non-denominational congregations are elder-led (a board of elders with a lead pastor) or pastor-led (strong senior pastor with a staff team). Interview your leadership structure before configuring RBAC: who has final authority on hiring worship staff? Who approves the annual song list or worship direction? Assign write permissions only to the people who actually hold those decisions in your culture. Common role names: **Lead Pastor**, **Executive Pastor**, **Worship Director**, **Team Leader**, **Volunteer Coordinator**.

**Member journey pipeline.** Without a confessional standard or connectional denomination, the member journey is whatever your church defines it to be. This is an opportunity: use Ministry Motion's member lifecycle configuration to encode your specific pathway — whether that is a new-members class, a "First Steps" series, or a connection event sequence. The Agent Council will surface personalized next-step prompts based on where a member sits in your custom journey, not a generic denominational template.

**Doctrine-sensitive AI context.** Set the tradition context to **Non-Denominational / Contemporary Evangelical** and leave liturgical calendar flags off unless your church has adopted a liturgical rhythm (some non-denominational churches observe Advent and Easter seasons). Enable **Flexible Service Flow** so the service-planning agent presents options rather than a fixed order of service. If your church has a specific theological emphasis — charismatic, Reformed, Word of Faith, seeker-sensitive — add that as a custom context tag. The Agent Council will incorporate it into vocal selection rationale, service length estimates, and member engagement commentary.

**Terminology reminders.** Non-denominational churches vary widely, so there are no universal mandates here. The most common defaults: **Communion** or **Lord's Supper** (rarely Eucharist), **Baptism** without mode specification (though most non-denominational churches practice immersion), **Worship Team** rather than choir, **Small Groups** rather than Sunday school classes or cell groups (though both are used). Update Ministry Motion's terminology settings to match whatever your congregation already uses — consistency between the software and the bulletin reduces confusion for staff and volunteers alike.

---

## First-Week Configuration Checklist

Work through this list in order during your first week of setup. Items 1–6 should be completed before any team members receive their invitations — getting the foundation right saves you from having to re-explain role changes later.

1. Identify your tradition from the five profiles above (or the closest match) and select it in Agent Council settings as your **doctrine-sensitive AI context baseline**.
2. Review and rename the default role labels in the RBAC configuration to match your church's actual titles — change "Worship Pastor" to "Music Minister," "Director of Worship Arts," or whatever your congregation uses.
3. Map your governance structure: who holds final authority at each tier? Assign **Admin** write permissions only to those individuals. Everyone else starts with read or limited-write access.
4. Configure the **member journey pipeline stages** to reflect your church's actual pathway from first visit to fully engaged member, using terminology from your tradition (confirmation, covenant membership, Spirit baptism, or whatever applies).
5. Set **sacrament / ordinance terminology** in the platform settings to match your tradition — this flows through into service planning templates, member communications, and Agent Council outputs.
6. Enable or disable the **Liturgical Calendar** flag based on whether your tradition observes Advent, Lent, Pentecost Sunday, and similar seasons.
7. Invite your leadership team using their correctly labeled roles so they experience the right permissions and the right terminology from their first login.
8. Review the Agent Council's first service-planning suggestion after setup and confirm that the language, structure, and song-type recommendations feel appropriate to your tradition. Adjust any context flags that produced off-brand suggestions.
9. Run a test member journey entry (e.g., a staff member as a test record) through each configured lifecycle stage to verify that automated prompts and Agent Council coaching notes use your tradition's language.
10. Share this guide with your worship director so they understand which configuration choices affect the AI coaching and vocal assessment outputs they will see in their daily workflow.

---

Configuring Ministry Motion for your tradition is not a one-time event — it is an ongoing conversation between your leadership culture and the platform. As your church grows, adds new roles, or refines its theology of worship, revisit these settings. The member roles, AI context flags, and lifecycle stages are all editable by Church Admins at any time, so the platform can grow with your congregation rather than constraining it. The goal is software that feels less like a foreign import and more like a tool your tradition would have built for itself.`,
};
