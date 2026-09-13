import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Cron Expression Generator: The Complete Guide to Cron Syntax, Job Scheduling, and Automation</h2>
      <p>
        Cron is the foundational task scheduling system in Unix and Linux. Named after the Greek word for time (Chronos), cron runs commands or scripts at specified recurring intervals — every minute, every hour, every day at midnight, every Monday at 9 AM, the first day of every month, or any combination thereof. First introduced by Ken Thompson in Version 7 Unix (1979) and dramatically extended by Paul Vixie in 1987 (Vixie Cron), it has become the universal language of scheduled automation on Unix systems and inspired similar scheduling syntax in cloud platforms, CI/CD systems, and container orchestrators.
      </p>
      <p>
        A cron expression is a compact, concise string of five (or six) fields that specifies a complete schedule. Understanding cron expression syntax is essential for every developer, system administrator, and DevOps engineer who works on Unix-based systems, cloud platforms, or any modern infrastructure. This guide covers the complete cron syntax, common scheduling patterns, platform-specific extensions, debugging techniques, and alternatives for complex scheduling requirements.
      </p>

      <h2>The Anatomy of a Cron Expression</h2>
      <p>
        A standard (Unix/Vixie) cron expression consists of five space-separated fields:
      </p>
      <pre><code>{`┌─────────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌─────────── day of month (1 - 31)
│ │ │ ┌───────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌─────── day of week (0 - 7 or SUN-SAT, 0 and 7 are both Sunday)
│ │ │ │ │
* * * * *`}</code></pre>
      <p>
        Many modern platforms add a sixth field for seconds (at the beginning) or for year (at the end), but the five-field format is the universal standard.
      </p>

      <h3>Field Values and Ranges</h3>
      <ul>
        <li><strong>Minute</strong>: 0–59</li>
        <li><strong>Hour</strong>: 0–23 (0 = midnight, 12 = noon, 23 = 11 PM)</li>
        <li><strong>Day of month</strong>: 1–31</li>
        <li><strong>Month</strong>: 1–12 or JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC</li>
        <li><strong>Day of week</strong>: 0–7 or SUN, MON, TUE, WED, THU, FRI, SAT (both 0 and 7 = Sunday)</li>
      </ul>

      <h3>Special Characters</h3>
      <ul>
        <li><strong>*</strong> (asterisk): Any/every value. <code>* * * * *</code> = every minute</li>
        <li><strong>,</strong> (comma): Multiple values. <code>0 9,17 * * *</code> = at 9 AM and 5 PM</li>
        <li><strong>-</strong> (hyphen): Range. <code>0 9-17 * * *</code> = every hour from 9 AM to 5 PM</li>
        <li><strong>/</strong> (slash): Step/interval. <code>*/5 * * * *</code> = every 5 minutes</li>
        <li><strong>?</strong> (question mark): No specific value. Used in some implementations for day-of-month or day-of-week when the other is specified (Quartz, AWS)</li>
        <li><strong>L</strong> (last): Last day of month or last weekday. <code>L * * *</code> in day field = last day of month (Quartz)</li>
        <li><strong>W</strong> (weekday): Nearest weekday to a given day (Quartz)</li>
        <li><strong>#</strong> (hash): Nth occurrence of a weekday. <code>2#1</code> = first Monday (Quartz)</li>
      </ul>

      <h2>Common Cron Expressions: The Essential Patterns</h2>

      <h3>Every Minute, Hour, Day</h3>
      <ul>
        <li><code>* * * * *</code> — Every minute</li>
        <li><code>0 * * * *</code> — Every hour (at :00)</li>
        <li><code>0 0 * * *</code> — Every day at midnight</li>
        <li><code>0 12 * * *</code> — Every day at noon</li>
        <li><code>0 0 1 * *</code> — First day of every month at midnight</li>
        <li><code>0 0 1 1 *</code> — January 1st at midnight (annually)</li>
        <li><code>0 0 * * 0</code> — Every Sunday at midnight</li>
      </ul>

      <h3>Business Hours and Workday Patterns</h3>
      <ul>
        <li><code>0 9 * * 1-5</code> — 9 AM Monday through Friday</li>
        <li><code>0 9-17 * * 1-5</code> — Every hour from 9 AM to 5 PM, Monday–Friday</li>
        <li><code>*/30 9-17 * * 1-5</code> — Every 30 minutes during business hours</li>
        <li><code>0 8,12,17 * * 1-5</code> — 8 AM, noon, and 5 PM on weekdays</li>
        <li><code>0 0 * * 1</code> — Every Monday at midnight (weekly job)</li>
        <li><code>0 9 * * 1</code> — Every Monday at 9 AM</li>
        <li><code>30 16 * * 5</code> — Every Friday at 4:30 PM</li>
      </ul>

      <h3>Interval-Based Patterns</h3>
      <ul>
        <li><code>*/5 * * * *</code> — Every 5 minutes</li>
        <li><code>*/10 * * * *</code> — Every 10 minutes</li>
        <li><code>*/15 * * * *</code> — Every 15 minutes</li>
        <li><code>*/30 * * * *</code> — Every 30 minutes</li>
        <li><code>0 */2 * * *</code> — Every 2 hours</li>
        <li><code>0 */6 * * *</code> — Every 6 hours (midnight, 6 AM, noon, 6 PM)</li>
        <li><code>0 */12 * * *</code> — Every 12 hours (midnight and noon)</li>
        <li><code>0 0 */2 * *</code> — Every other day at midnight</li>
        <li><code>0 0 */7 * *</code> — Every 7 days at midnight (approximates weekly)</li>
      </ul>

      <h3>Monthly Patterns</h3>
      <ul>
        <li><code>0 0 1 * *</code> — First of the month at midnight</li>
        <li><code>0 0 15 * *</code> — 15th of every month at midnight</li>
        <li><code>0 0 1,15 * *</code> — 1st and 15th of every month at midnight</li>
        <li><code>0 0 28-31 * *</code> — Last few days of every month (approximate month-end)</li>
        <li><code>0 0 1 */3 *</code> — First of every quarter (January, April, July, October)</li>
        <li><code>0 0 1 1,4,7,10 *</code> — Same as above, explicit months</li>
      </ul>

      <h3>Non-Standard Shortcuts</h3>
      <p>
        Many cron implementations support named schedule shortcuts that expand to common expressions:
      </p>
      <ul>
        <li><code>@yearly</code> or <code>@annually</code> — <code>0 0 1 1 *</code> (once per year, January 1 at midnight)</li>
        <li><code>@monthly</code> — <code>0 0 1 * *</code> (once per month, first day at midnight)</li>
        <li><code>@weekly</code> — <code>0 0 * * 0</code> (once per week, Sunday midnight)</li>
        <li><code>@daily</code> or <code>@midnight</code> — <code>0 0 * * *</code> (once per day at midnight)</li>
        <li><code>@hourly</code> — <code>0 * * * *</code> (once per hour)</li>
        <li><code>@reboot</code> — Run once at startup (not supported everywhere)</li>
      </ul>
      <p>
        These shortcuts are supported by Vixie cron and most modern cron implementations, but not by Quartz Scheduler, AWS EventBridge, or other non-standard implementations.
      </p>

      <h2>Day-of-Month and Day-of-Week Interaction</h2>
      <p>
        The interaction between the day-of-month and day-of-week fields is a source of confusion. In Vixie cron (standard Unix cron):
      </p>
      <ul>
        <li>If <strong>both</strong> day-of-month and day-of-week are specified (not *), the job runs when <strong>either</strong> condition is true (OR logic)</li>
        <li>If <strong>only one</strong> is specified (the other is *), only that condition applies</li>
      </ul>
      <p>
        Example: <code>0 0 1 * 1</code> runs at midnight on the 1st of every month AND at midnight on every Monday — not only on the 1st of the month when it's also a Monday. This behavior surprises many users who expect AND logic.
      </p>
      <p>
        The Quartz Scheduler (used in Java applications) requires you to explicitly use <code>?</code> in one of these fields when the other is specified, to make intent clear. Quartz enforces that you cannot specify both — you must put <code>?</code> in one to indicate "no specific value here."
      </p>

      <h2>Timezone Handling in Cron</h2>
      <p>
        Standard Unix cron runs in the server's local timezone. This seems simple, but daylight saving time (DST) transitions create subtle problems:
      </p>
      <ul>
        <li>When clocks spring forward (e.g., 2:00 AM → 3:00 AM), any job scheduled at 2:30 AM is skipped entirely — that time doesn't exist.</li>
        <li>When clocks fall back (e.g., 2:00 AM → 1:00 AM), any job scheduled at 1:30 AM runs twice — that time exists twice.</li>
      </ul>
      <p>
        For robust time-sensitive jobs (billing cycles, financial reports), always run cron in UTC and convert to local time in the application if needed. UTC never has DST transitions.
      </p>
      <p>
        Some cron implementations support per-job timezone specification. Debian/Ubuntu's cron daemon and the popular <code>supercronic</code> support <code>CRON_TZ</code> or <code>TZ</code> environment variable per crontab:
      </p>
      <pre><code>{`TZ=America/New_York
0 9 * * 1-5 /path/to/morning-job.sh`}</code></pre>

      <h2>Platform-Specific Cron Implementations</h2>

      <h3>Linux crontab (Vixie Cron)</h3>
      <p>
        The most common cron implementation. Edit your personal crontab with <code>crontab -e</code>, list it with <code>crontab -l</code>, and remove it with <code>crontab -r</code>. System-wide crontabs are in <code>/etc/crontab</code> (with an additional user field) and <code>/etc/cron.d/</code>. Convenience directories: <code>/etc/cron.hourly/</code>, <code>/etc/cron.daily/</code>, <code>/etc/cron.weekly/</code>, <code>/etc/cron.monthly/</code>.
      </p>
      <p>
        Cron output is mailed to the MAILTO environment variable (defaults to the crontab owner). Set <code>MAILTO=""</code> to suppress emails, or redirect output explicitly: <code>{'0 * * * * /script.sh >> /var/log/job.log 2>&1'}</code>
      </p>

      <h3>macOS launchd (plist)</h3>
      <p>
        macOS uses launchd as its service manager. While cron is available on macOS (<code>crontab -e</code> works), launchd plists are the preferred approach for periodic tasks on macOS. A launchd plist for hourly execution:
      </p>
      <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.example.hourly-job</string>
  <key>ProgramArguments</key>
  <array>
    <string>/path/to/script.sh</string>
  </array>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
</dict>
</plist>`}</code></pre>

      <h3>GitHub Actions</h3>
      <p>
        GitHub Actions supports cron-scheduled workflows using the standard 5-field cron syntax:
      </p>
      <pre><code>{`on:
  schedule:
    - cron: '0 0 * * *'   # Daily at midnight UTC
    - cron: '0 9 * * 1-5' # 9 AM UTC on weekdays`}</code></pre>
      <p>
        Important notes for GitHub Actions cron:
      </p>
      <ul>
        <li>Always runs in UTC — there is no timezone configuration</li>
        <li>Minimum interval is 5 minutes (runs more frequent than 5 minutes may be throttled)</li>
        <li>Scheduled workflows on inactive repositories (no pushes in 60 days) may be paused by GitHub</li>
        <li>The <code>?</code> character is NOT supported (use standard Vixie cron syntax)</li>
      </ul>

      <h3>AWS EventBridge (CloudWatch Events)</h3>
      <p>
        AWS EventBridge supports two schedule expression formats:
      </p>
      <ul>
        <li><strong>Rate expressions</strong>: <code>rate(5 minutes)</code>, <code>rate(1 hour)</code>, <code>rate(7 days)</code></li>
        <li><strong>Cron expressions</strong>: A 6-field format with seconds replaced by minutes in position 1 and year added as field 6: <code>cron(minutes hours day-of-month month day-of-week year)</code></li>
      </ul>
      <p>
        AWS EventBridge cron differences from standard cron:
      </p>
      <ul>
        <li>The <code>?</code> character is required when specifying either day-of-month or day-of-week</li>
        <li>The <code>L</code> and <code>W</code> characters are supported</li>
        <li>Minimum interval is 1 minute</li>
        <li>Always runs in UTC</li>
        <li>Year field is valid 1970–2199</li>
      </ul>
      <p>
        Example — Daily at midnight UTC in AWS format: <code>cron(0 0 * * ? *)</code>
      </p>

      <h3>Kubernetes CronJob</h3>
      <p>
        Kubernetes CronJob uses standard 5-field Vixie cron syntax. Key considerations:
      </p>
      <pre><code>{`apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-cleanup
spec:
  schedule: "0 2 * * *"
  timeZone: "America/New_York"  # Kubernetes 1.27+
  concurrencyPolicy: Forbid      # Prevent concurrent runs
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: cleanup
            image: my-image:latest
          restartPolicy: OnFailure`}</code></pre>
      <p>
        Important CronJob settings:
      </p>
      <ul>
        <li><strong>concurrencyPolicy</strong>: <code>Allow</code> (default), <code>Forbid</code> (skip if previous still running), or <code>Replace</code> (kill previous and start new)</li>
        <li><strong>startingDeadlineSeconds</strong>: How late a job can start before being considered failed (important for missed schedules)</li>
        <li><strong>timeZone</strong>: Supported in Kubernetes 1.27+ — before that, runs in UTC</li>
      </ul>

      <h3>Quartz Scheduler (Java)</h3>
      <p>
        Quartz is the most widely used Java job scheduling library. It uses a 6 or 7 field cron format:
      </p>
      <pre><code>{`Seconds Minutes Hours DayOfMonth Month DayOfWeek [Year]
0 0 12 * * ?         // Every day at noon
0 0/5 14 * * ?       // Every 5 minutes starting at 2 PM, every day
0 0 8-10 ? * MON-FRI // 8, 9, 10 AM Monday-Friday`}</code></pre>
      <p>
        Quartz differences from Vixie cron:
      </p>
      <ul>
        <li>Seconds field added at the beginning (0–59)</li>
        <li><code>?</code> required in either day-of-month or day-of-week when the other is specified</li>
        <li><code>L</code> supported (last day of month, last weekday of month)</li>
        <li><code>W</code> supported (nearest weekday to a given day-of-month)</li>
        <li><code>#</code> supported (Nth occurrence of weekday in month — e.g., 2#1 = first Monday)</li>
        <li>Day-of-month and day-of-week use AND semantics when <code>?</code> is not used (differs from Vixie)</li>
      </ul>

      <h2>Best Practices for Cron Jobs</h2>

      <h3>Idempotency</h3>
      <p>
        Cron jobs should be idempotent — running the same job multiple times should produce the same result as running it once. This is critical because:
      </p>
      <ul>
        <li>Clock adjustments or NTP sync can cause a job to run twice</li>
        <li>Missed schedules may be run immediately when the system recovers</li>
        <li>Kubernetes CronJob with <code>concurrencyPolicy: Allow</code> may run overlapping instances</li>
        <li>Distributed environments may have multiple servers with cron configured</li>
      </ul>

      <h3>Locking for Distributed Systems</h3>
      <p>
        In horizontally scaled systems with multiple servers each running cron, every server executes the same cron job simultaneously. Use distributed locks to ensure only one instance runs at a time. Common approaches:
      </p>
      <ul>
        <li>Database-level advisory locks (PostgreSQL's pg_try_advisory_lock)</li>
        <li>Redis-based distributed locks (Redlock algorithm)</li>
        <li>ZooKeeper or etcd ephemeral nodes</li>
        <li>Tools like <code>cronsun</code> or <code>kronos</code> for cron coordination</li>
      </ul>

      <h3>Logging and Monitoring</h3>
      <p>
        Every cron job should log its start time, completion time, and success/failure status. Redirect stdout and stderr to log files:
      </p>
      <pre><code>{`0 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1`}</code></pre>
      <p>
        Monitor cron job execution with heartbeat monitoring tools like Healthchecks.io, Cronitor, or Dead Man's Snitch. These tools alert you when a cron job fails to run, which standard monitoring systems miss (they only alert on errors, not absence of execution).
      </p>

      <h3>Avoiding the Thundering Herd</h3>
      <p>
        When many cron jobs run at midnight (0 0 * * *) across many servers, they all hit shared resources simultaneously. Stagger jobs with different minutes to distribute load:
      </p>
      <pre><code>{`# Instead of all at midnight:
0 0 * * *   /job-one.sh
0 0 * * *   /job-two.sh

# Stagger:
0 0 * * *   /job-one.sh
15 0 * * *  /job-two.sh
30 0 * * *  /job-three.sh`}</code></pre>
      <p>
        Some organizations add a random jitter to job start times programmatically: <code>sleep $((RANDOM % 300)); /job.sh</code> delays the job up to 5 minutes randomly.
      </p>

      <h3>Timeout and Cleanup</h3>
      <p>
        Cron jobs that hang or run indefinitely block resources. Use the <code>timeout</code> command to enforce maximum runtime:
      </p>
      <pre><code>{`0 2 * * * timeout 1h /usr/local/bin/backup.sh`}</code></pre>
      <p>
        For Kubernetes CronJobs, set <code>activeDeadlineSeconds</code> on the Job spec to terminate jobs that exceed a time limit.
      </p>

      <h3>Permissions and Security</h3>
      <p>
        Cron jobs run with the permissions of the crontab owner. Avoid running cron jobs as root unless absolutely necessary — use the principle of least privilege. System crontabs in <code>/etc/crontab</code> have an explicit user field:
      </p>
      <pre><code>{`0 2 * * * backupuser /usr/local/bin/backup.sh`}</code></pre>
      <p>
        Restrict write access to crontab files. A writable crontab is a privilege escalation vector — anyone who can modify it can execute arbitrary code as the crontab owner.
      </p>

      <h2>Debugging Cron Jobs</h2>

      <h3>Test Your Expression</h3>
      <p>
        Use a cron expression parser or online tool to verify your expression fires at the expected times. Generate the next 10 occurrences to confirm the schedule is correct. Common mistakes: off-by-one in hours (forgetting 0-based hours, writing 24 instead of 0 for midnight), wrong day-of-week number (some expect Sunday=0, others Sunday=1), and asterisk vs zero confusion.
      </p>

      <h3>Check the Cron Daemon Logs</h3>
      <pre><code>{`# Debian/Ubuntu — check syslog
grep CRON /var/log/syslog

# RHEL/CentOS
grep CRON /var/log/cron

# journalctl (systemd)
journalctl -u cron
journalctl -u crond

# Check if cron daemon is running
systemctl status cron
service cron status`}</code></pre>

      <h3>Run the Job Manually</h3>
      <p>
        Before relying on cron, test the job by running it manually as the cron user: <code>sudo -u cronuser /path/to/script.sh</code>. This catches permission issues, missing environment variables (cron has a minimal environment without <code>~/.bashrc</code> or <code>~/.bash_profile</code>), and missing PATH entries. The most common cron failure cause: the script works interactively because it relies on PATH settings that aren't in the minimal cron environment.
      </p>
      <p>
        Always use full absolute paths in cron jobs, or explicitly set PATH in the crontab:
      </p>
      <pre><code>{`PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
0 2 * * * /usr/local/bin/backup.sh`}</code></pre>

      <h3>Cron Environment Differences</h3>
      <p>
        Cron jobs run with a minimal environment. Variables commonly missing from cron that are present in interactive shells:
      </p>
      <ul>
        <li>HOME (usually set to the crontab owner's home)</li>
        <li>USER / LOGNAME</li>
        <li>SHELL (defaults to /bin/sh, not /bin/bash)</li>
        <li>PATH (very minimal — add explicitly)</li>
        <li>All terminal-specific variables (TERM, COLUMNS, ROWS)</li>
        <li>Anything set in .bashrc, .bash_profile, or .profile (not sourced by cron)</li>
        <li>SSH_AUTH_SOCK (SSH agent forwarding)</li>
      </ul>

      <h2>Alternatives to Cron</h2>

      <h3>systemd Timers</h3>
      <p>
        On systemd-based Linux systems, systemd timers provide a powerful cron alternative with dependency management, logging via journald, resource controls, and better error handling. A timer unit specifies when to run a corresponding service unit:
      </p>
      <pre><code>{`# /etc/systemd/system/backup.timer
[Unit]
Description=Daily backup timer

[Timer]
OnCalendar=daily
Persistent=true   # Run immediately if missed
RandomizedDelaySec=300

[Install]
WantedBy=timers.target`}</code></pre>
      <p>
        <code>Persistent=true</code> runs the job immediately if it was missed (e.g., the system was off during the scheduled time), addressing a common cron limitation. <code>RandomizedDelaySec</code> adds automatic jitter.
      </p>

      <h3>Celery Beat (Python)</h3>
      <p>
        For Python applications using Celery as a task queue, Celery Beat is the scheduler. It supports cron expressions and interval-based schedules and stores schedules in a database, enabling dynamic updates without redeployment. Beat runs as a separate process alongside Celery workers.
      </p>

      <h3>Sidekiq-Cron and Clockwork (Ruby)</h3>
      <p>
        Ruby applications using Sidekiq can use sidekiq-cron or sidekiq-scheduler for cron-like scheduling within the Rails/Sidekiq ecosystem. Clockwork is a simpler alternative that runs as a separate process with Ruby-based schedule definitions.
      </p>

      <h3>Cloud Native Schedulers</h3>
      <p>
        For applications already running on cloud platforms, native schedulers often make more sense than traditional cron:
      </p>
      <ul>
        <li><strong>AWS EventBridge Scheduler</strong>: Managed cron/rate scheduling with guaranteed at-least-once delivery, retries, dead-letter queues, and IAM-based permissions</li>
        <li><strong>Google Cloud Scheduler</strong>: Fully managed cron service with HTTP targets, Pub/Sub topics, and App Engine targets</li>
        <li><strong>Azure Logic Apps</strong>: Low-code scheduled workflows with connectors to hundreds of services</li>
        <li><strong>Temporal</strong>: Workflow engine with built-in cron scheduling, long-running job support, and automatic retries</li>
      </ul>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a cron expression?',
    answer: 'A cron expression is a compact string of 5 (or 6) space-separated fields that defines a recurring schedule: minute, hour, day-of-month, month, and day-of-week. Each field specifies when a scheduled job should run. For example, "0 2 * * *" means "at 2:00 AM every day." Cron is the Unix-standard task scheduling system used on Linux, macOS, and most cloud platforms.',
  },
  {
    category: 'General',
    question: 'What does * (asterisk) mean in a cron expression?',
    answer: '* means "every valid value" for that field — every minute, every hour, every day, every month, every weekday. "* * * * *" runs every minute. "0 * * * *" runs every hour on the hour (0 minutes, every hour). An * in a field means "no restriction" — match any value for this field.',
  },
  {
    category: 'Syntax',
    question: 'How do I run a cron job every 5 minutes?',
    answer: 'Use the slash (step) operator: "*/5 * * * *". This means "every 5 minutes starting from minute 0" — firing at 0:00, 0:05, 0:10, ..., 0:55, 1:00, 1:05, etc. Other intervals: */10 for every 10 minutes, */15 for every 15 minutes, */30 for every 30 minutes.',
  },
  {
    category: 'Syntax',
    question: 'How do I run a cron job on weekdays only (Monday–Friday)?',
    answer: 'Use "1-5" in the day-of-week field: "0 9 * * 1-5" runs at 9 AM every Monday through Friday. Day-of-week numbering: 0 or 7 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday. You can also use names: "0 9 * * MON-FRI".',
  },
  {
    category: 'Syntax',
    question: 'How do I run a cron job on the first day of every month?',
    answer: '"0 0 1 * *" runs at midnight on the 1st of every month. The day-of-month field is 1. For the first of specific months: "0 0 1 1,4,7,10 *" runs on the first of January, April, July, and October (quarterly). For both 1st and 15th: "0 0 1,15 * *".',
  },
  {
    category: 'Syntax',
    question: 'What is the difference between day-of-month and day-of-week fields?',
    answer: 'In standard Unix cron, if both day-of-month and day-of-week are specified (both are not *), the job runs when EITHER condition is true (OR logic). "0 0 1 * 1" runs at midnight on the 1st of the month AND at midnight on every Monday. This is a common source of confusion — many expect AND logic. Use a script condition to enforce AND if needed.',
  },
  {
    category: 'Syntax',
    question: 'What are @daily, @weekly, @monthly, @hourly shorthand expressions?',
    answer: 'These are non-standard shortcuts: @yearly/"@annually" = "0 0 1 1 *" (January 1st midnight), @monthly = "0 0 1 * *" (1st of month midnight), @weekly = "0 0 * * 0" (Sunday midnight), @daily/@midnight = "0 0 * * *" (daily midnight), @hourly = "0 * * * *" (every hour). Supported by Vixie cron but not by all platforms (AWS EventBridge, Quartz do not support them).',
  },
  {
    category: 'Syntax',
    question: 'How do I specify multiple values in a cron field?',
    answer: 'Use comma to separate multiple values: "0 9,17 * * *" runs at 9 AM and 5 PM. "0 0 1,15 * *" runs on the 1st and 15th of each month. "0 0 * * 1,3,5" runs on Monday, Wednesday, and Friday. Commas and ranges can be combined: "0 0 * * 1-3,5" = Monday, Tuesday, Wednesday, and Friday.',
  },
  {
    category: 'Syntax',
    question: 'What does the slash (/) mean in cron expressions?',
    answer: 'The slash defines step values (intervals). "*/N" means every N units. "*/5" in the minute field means every 5 minutes. "*/2" in the hour field means every 2 hours. You can also use ranges with steps: "10-50/10" in the minute field means minutes 10, 20, 30, 40, 50. "*/1" is equivalent to "*" (every single unit).',
  },
  {
    category: 'Platform',
    question: 'How does GitHub Actions cron scheduling work?',
    answer: 'GitHub Actions uses standard 5-field cron syntax in the schedule trigger: `on: schedule: - cron: "0 0 * * *"`. Always runs in UTC. Minimum interval is 5 minutes. Scheduled workflows on inactive repositories (no pushes in 60 days) may be paused. The ? character is not supported — use standard Vixie syntax.',
  },
  {
    category: 'Platform',
    question: 'How does AWS EventBridge cron syntax differ from standard cron?',
    answer: 'AWS EventBridge uses `cron(minutes hours day-of-month month day-of-week year)` — 6 fields including a year. The ? character is REQUIRED in either day-of-month or day-of-week when the other is specified. L and W characters are supported. Rate expressions are also available: `rate(5 minutes)`, `rate(1 day)`. Always runs in UTC.',
  },
  {
    category: 'Platform',
    question: 'How does Quartz Scheduler cron differ from standard Unix cron?',
    answer: 'Quartz uses 6–7 fields: Seconds Minutes Hours DayOfMonth Month DayOfWeek [Year]. A Seconds field (0–59) is added at the beginning. The ? is required in day-of-month or day-of-week when the other is specified. L (last), W (weekday), and # (nth weekday) special characters are supported. Example: "0 0 12 * * ?" fires at noon every day.',
  },
  {
    category: 'Platform',
    question: 'How do I use cron with Kubernetes CronJob?',
    answer: 'Kubernetes CronJob uses standard 5-field cron syntax in the schedule field. Key settings: concurrencyPolicy (Allow/Forbid/Replace), startingDeadlineSeconds (how late a job can start), successfulJobsHistoryLimit, failedJobsHistoryLimit. Timezone support was added in Kubernetes 1.27 via the timeZone field. Before 1.27, CronJobs run in UTC.',
  },
  {
    category: 'Operations',
    question: 'How do I edit my crontab in Linux?',
    answer: 'Run `crontab -e` to edit your crontab in the default editor. `crontab -l` lists your current crontab. `crontab -r` removes your crontab entirely (use with caution). System-wide crontabs are in /etc/crontab and /etc/cron.d/. The /etc/crontab format has an additional username field: `0 2 * * * root /path/to/script.sh`.',
  },
  {
    category: 'Operations',
    question: 'Why is my cron job not running?',
    answer: 'Common causes: (1) Wrong path — cron uses a minimal PATH; use absolute paths or set PATH in crontab. (2) Wrong user — ensure the crontab owner has permission to run the command. (3) Script not executable — run `chmod +x /path/to/script.sh`. (4) Syntax error in crontab. (5) Cron daemon not running — check `systemctl status cron`. (6) Check /var/log/syslog for CRON entries to see if the job is being triggered.',
  },
  {
    category: 'Operations',
    question: 'How do I check if a cron job ran successfully?',
    answer: 'Check cron logs: `grep CRON /var/log/syslog` (Debian/Ubuntu) or `journalctl -u cron`. Redirect job output to log files in your cron command: `0 * * * * /script.sh >> /var/log/job.log 2>&1`. Use heartbeat monitoring tools (Healthchecks.io, Cronitor, Dead Man\'s Snitch) that alert when a job fails to check in within an expected time window.',
  },
  {
    category: 'Operations',
    question: 'How do I handle timezone issues in cron?',
    answer: 'Standard cron runs in the server\'s local timezone. For UTC jobs, set TZ=UTC in your crontab header. For per-job timezone, some implementations support CRON_TZ or TZ environment variable before the cron line. Be aware of DST: clocks springing forward skip times (jobs at those times are missed), clocks falling back repeat times (jobs may run twice). Running in UTC avoids all DST issues.',
  },
  {
    category: 'Best Practices',
    question: 'What does it mean for a cron job to be idempotent and why does it matter?',
    answer: 'An idempotent cron job produces the same result whether it runs once or multiple times. This matters because clock adjustments, missed schedules, or distributed systems running multiple instances can cause a job to run more than once. Idempotent jobs use upsert (INSERT OR UPDATE) instead of INSERT, check if work is already done before doing it, and use unique constraints to prevent duplicates.',
  },
  {
    category: 'Best Practices',
    question: 'How do I prevent multiple instances of a cron job from running simultaneously?',
    answer: 'Use file-based locking: `flock -n /tmp/job.lock /path/to/script.sh`. For distributed systems, use database advisory locks (PostgreSQL pg_try_advisory_lock), Redis distributed locks (Redlock), or Kubernetes CronJob concurrencyPolicy: Forbid. Tools like `run-one` (Linux) also prevent duplicate process runs.',
  },
  {
    category: 'Best Practices',
    question: 'How do I avoid all my cron jobs running at midnight at the same time?',
    answer: 'Stagger jobs across different minutes: instead of "0 0 * * *" for everything, use "0 0 * * *", "15 0 * * *", "30 0 * * *". Add random jitter: `sleep $((RANDOM % 300)); /script.sh` delays 0–5 minutes randomly. Systemd timers support RandomizedDelaySec. This prevents thundering herd problems on shared databases and APIs.',
  },
  {
    category: 'Best Practices',
    question: 'How should I log cron job output?',
    answer: 'Redirect both stdout and stderr to a log file: `0 2 * * * /script.sh >> /var/log/job.log 2>&1`. Include timestamps in your script output: `echo "$(date -Iseconds) - Starting backup"`. Use log rotation (logrotate on Linux) to prevent log files from growing unbounded. Set MAILTO="" in your crontab to disable email output, or set MAILTO to your email to receive failure notifications.',
  },
  {
    category: 'Best Practices',
    question: 'What is the minimum cron interval I can use?',
    answer: 'Standard Unix/Vixie cron minimum is 1 minute (the minute field is the finest granularity). For sub-minute scheduling, use systemd timers with OnBootSec or loop within the cron job (`while true; do /job.sh; sleep 10; done`), though this approach has limitations. GitHub Actions minimum is 5 minutes. AWS EventBridge minimum is 1 minute. Quartz Scheduler supports seconds.',
  },
  {
    category: 'Alternatives',
    question: 'What is systemd timers and how is it better than cron?',
    answer: 'Systemd timers are service scheduling units that provide: automatic logging via journald, dependency management (start a service before the job), resource controls (memory/CPU limits), Persistent=true (run if missed), RandomizedDelaySec (automatic jitter), better error handling, and `systemctl list-timers` to see all scheduled timers. The downside: more verbose configuration than crontab.',
  },
  {
    category: 'Alternatives',
    question: 'Should I use cron or a cloud scheduler (AWS EventBridge, Google Cloud Scheduler)?',
    answer: 'For cloud-native applications, managed cloud schedulers are generally better: no server management, at-least-once delivery guarantees, retry policies, dead-letter queues, IAM-based security, and monitoring integration. Use traditional cron for: on-premise systems, tasks tied to a specific server, simple Unix operations that don\'t need cloud integration, and cases where simplicity trumps features.',
  },
  {
    category: 'Syntax',
    question: 'How do I run a cron job on the last day of every month?',
    answer: 'There\'s no direct way in standard cron. Common workarounds: (1) Schedule for the 28th to 31st and check in the script if it\'s the last day: `date -d tomorrow +%d = "01"`. (2) Use Quartz Scheduler\'s L field: "0 0 L * ?"runs at midnight on the last day of each month. (3) Schedule monthly on the 1st and run the "last month" job: shift by one month in your script logic.',
  },
];

export const cronGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
