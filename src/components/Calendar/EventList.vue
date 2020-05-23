<template>
  <div>
    <div
      v-for="(events, section) in sectionedEvents"
      :key="section"
      class="col-md-8 left-align"
    >
      <h1>{{ section.toUpperCase() }}</h1>
      <div v-if="events.length">
        <div
          v-for="(event, index) in events"
          :key="index+event.id"
        >
          <hr
            v-if="index !== 0"
            class="divider"
          >
          <div class="row">
            <div class="col-md-4 secondary-coloring">
              {{ remainingTime(event) }}
            </div>
            <div
              class="col-md summary"
              :class="{'secondary-coloring': !event.organizer.self}"
            >
              <b>{{ event.summary }}</b>
              <div v-if="event.organizer.email !== user.email">
                (external)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No entries found</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

import moment from 'moment';
import { CalEvent } from '../../interfaces/calendar';
import { isSameDay } from '../../lib/date';

@Component
export default class EventList extends Vue {
    @Prop({ required: true })
    public events!: CalEvent[]

    get user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    }

    remainingTime(event: CalEvent) {
      const eventDate = new Date(event.start.dateTime ?? event.start.date);
      const startTime = eventDate.getTime();
      return `${moment(startTime).fromNow()} `;
    }

    get sectionedEvents() {
      const tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);

      const sortedEvents: {[key: string]: CalEvent[]} = { today: [], tomorrow: [], upcoming: [] };

      this.events
        .sort((eventA, eventB) => {
          const eventADate = new Date(eventA.start.dateTime ?? eventA.start.date);
          const eventBDate = new Date(eventB.start.dateTime ?? eventB.start.date);
          return eventADate > eventBDate ? 1 : -1;
        })
        .forEach((event) => {
          const eventDate = new Date(event.start.dateTime ?? event.start.date);
          if (isSameDay(new Date(), eventDate)) {
            sortedEvents.today.push(event);
          } else if (isSameDay(tomorrow, eventDate)) {
            sortedEvents.tomorrow.push(event);
          } else {
            sortedEvents.upcoming.push(event);
          }
        });
      console.log(sortedEvents);
      return sortedEvents;
    }
}
</script>

<style lang="scss" scoped>
  .left-align {
      text-align: initial;
  }

  .secondary-coloring {
    color: var(--secondary-color);
  }

  .summary {
    word-break: break-word;
  }

  .divider {
    border: 0;
    height: 1px;
    background-image:
      linear-gradient(to right, rgba(0, 0, 0, 0), var(--secondary-color) , rgba(0, 0, 0, 0));
  }
</style>
