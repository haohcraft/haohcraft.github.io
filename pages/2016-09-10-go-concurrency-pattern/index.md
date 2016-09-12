---
title: Go Concurrency Pattern
date: 1473516705635
layout: post
path: "/go-concurrency-pattern/"
intro: "Note on a talk about Go Concurrency Pattern"
---

Note from [this video](https://www.youtube.com/watch?v=f6kdp27TYZs)

### Basic
#### What's concurrency ?

Concurrency is the composition of independently executing computations.

Concurrency is a way to structure software, particularly as a way to write clean code that interacts well with the real world.

##### Concurrency is not parallelism
> not quite understand this part tho

Concurrency is not parallelism, tho it enables parallilsm.

If you have only one processor, your program can still be concurrent but it cannot be parallel.

On the other hand, a well-written concurrent program might run efficiently in parallel on a multiprocessor. That property could be important...

See [tinyurl.com/goconcnotpar]() for more on that distinction

##### A model for software construction
Easy to understand

#### History
[Hoare's CSP](http://spinroot.com/courses/summer/Papers/hoare_1978.pdf) paper in 1978

Dijkstra's guarded commands

#### Distinction
Go is distinguished by first-class *channels*.

### Basic Example
...
...

#### Goroutines

What is a goroutine? It's an independently executing function, launched by a go statement.

It has its own call stack, which grows and shrinks as required.

It's very cheap. It's practical to have thousands, even hundres of thousands of goroutines.

It's not a thread.

There might be only one thread in a program with thousands of goroutines.

Instead, goroutines are multiplexed dynamically onto threads as needed to keep all the goroutines running.

But if you think of it as a very cheap thread, you won't be far off.

#### Communication

#### Channels
A channel in Go provides a connection b/w two goroutines, allowing them to communicate.

```
// Declaring and initializing
var c chan int
c := make(chan int)

```

```
// Sending on a channel
c <- -1
```
```
// Receiving from a channel
// The 'arrow' indicates the direction of data flow
value = <-c
```

##### Using channels
A channel connects the main and boring goroutines so they can communicate.
```
func main() {
	c := make(chan string)
	go boring('boring', c)
	for i:= 0; i < 5; i++ {
		fmt.Printf("You say: %q\n", <-c)
	}
	fmt.Println('You are boring; I am leaving')
}

func boring(msg string, c chan string) {
	for i:=0;; i++ {
		c <- fmt.Sprintf("%s %d", msg, i)
		time.Sleep(time.Duration(rand.Intn(le3)) * time.Millisecond)
	}
}

```
##### Synchronization

A sender and receiver must both be ready to play their part in the communicaton. Otherwise we wait until they are.

Thus channels both communicate and synthronize.

##### The Go approach
Don't communicate by sharing memeory, share memory by communicating.

#### "Patterns"

##### Generator: function that returns a channel
Channels are first-class values, just like strings or integers

```
c := boring("boring!") // Function returning a channel
for i:=0; i < 5; i++ {
	fmt.Printf("You say: %q\n", <-c)
}
fmt.Println('You are boring; I am leaving')
```

```
func boring(msg string) <-chan string {
	c := make(chan string)
	go func() { // We launch the goroutine from inside the function
		for i:=0;;i++ {
			c <- fmt.Sprinrf("%s %d", msg, i)
			time.Sleep(time.Duration(rand.Intn(le3)) * time.Millisecond)
		}
	}()
	return c // Return the channel to the caller
}

```

##### Channels as a handle on a service
Our boring function returns a channel that lets us communicate with the boring service it provides.

We can have more instances of the service.

```
func main() {
	joe := boring('Joe')
	ann := boring('Ann')
	for i:=0; i<5; i++ {
		fmt.Println(<-joe)
		fmt.Println(<-ann)
	}
	fmt.Println('You are boring; I am leaving');
}

```
#### Multiplexing
These programs make Joe and Ann count in lockstep
We can instead use a fan-in function to let whoever is ready talk

```
func fanIn(input1, input2 <-chan string) <-chan string {
	c := make(chan string)
	go func() { for { c <- <-input1 } }()
	go func() { for { c <- <-input2 } }()
	return c
}
```
```
func main() {
	c := fanIn(boring('Joe'), boring('Ann'))
	for i:=0; i<5; i++ {
		fmt.Println(<-c)
	}
}

```

#### Restoring sequencing
> no quite understand tho

Send a channel on a channel, making goroutine wait its turn.
Receive all messages, then enable them again by sending on a private channel.
First we define a message type that contains a channel for the reply.

```
type Message struct {
	str string
	wait chan bool
}
```

#### Select

A control structure unique to concurrency
The reason channels and goroutines are built into the language

The select statement provides another way to handle multiple channels.
It's like a switch, but each case is a communication:
- All channels are valued.
- Selection blocks until one communication can proceed, which one does
- if multiple can proceed, select chooses pseudo-randomly
- A default clause, if present, executes immediately if no channel is ready

##### Fan-in using select
```
func fanIn(input1, input2 <-chan string) <-chan string {
	c := make(chan string)
	go func() {
		for {
			select {
			case s := <-input1: c <- s
			case s := <-input2: c <- s
			}
		}
	}
	return c
}

```
##### Timeout using select
##### Quit channel
[this](https://github.com/lintide/GoConcurrencyPatterns#quit-channel)
##### Receive on quit channel
##### Daisy-chain


### Systems software
Go was designed for writing systems software. Let's see how the concurrency features come into play.
#### Example: Google Search






